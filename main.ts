// RainbowSparkleUnicorn.IoT.sendMQTTMessage("spaceship-console/alert", "Yellow Alert")
RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.P3, function () {
    RainbowSparkleUnicorn.comment("Press white spinner to warp back to yellow")
    consoleState = "YellowAlert"
    basic.showNumber(3)
})
// RainbowSparkleUnicorn.IoT.sendMQTTMessage("spaceship-console/buttons", "Red Button")
RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.P9, function () {
    basic.showNumber(9)
})
control.onEvent(5550, EventBusValue.MICROBIT_EVT_ANY, function () {
    // Pink Right Light
    RainbowSparkleUnicorn.Light.turnOff(lightPins.P13)
    RainbowSparkleUnicorn.Light.blink(lightPins.P13, 500, 500)
    // Pink Left Light
    RainbowSparkleUnicorn.Light.turnOff(lightPins.P14)
    RainbowSparkleUnicorn.Light.blink(lightPins.P14, 500, 500)
    // RainbowSparkleUnicorn.IoT.connectToInterWeb(
    // "152 2.4GHz",
    // "derwenthorpe",
    // "robotmqtt",
    // "public",
    // "public",
    // "Spaceship Console"
    // )
    // RainbowSparkleUnicorn.IoT.startReceivingMessages("spaceship-console/rx")
    IoTConnected = true
    RainbowSparkleUnicorn.Light.turnOff(lightPins.P13)
    RainbowSparkleUnicorn.Light.turnOff(lightPins.P14)
    sortOutFuelLights()
})
// RainbowSparkleUnicorn.IoT.sendMQTTMessage("spaceship-console/buttons", "Green Button")
RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.P10, function () {
    basic.showNumber(10)
})
// RainbowSparkleUnicorn.IoT.sendMQTTMessage("spaceship-console/alert", "Red Alert")
RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.P1, function () {
    consoleState = "RedAlert"
    basic.showNumber(1)
})
// RainbowSparkleUnicorn.IoT.sendMQTTMessage("spaceship-console/buttons", "Blue Button")
RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.P11, function () {
    basic.showNumber(11)
})
RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.P13, function () {
    basic.showNumber(13)
    sortOutFuelLights()
})
function sortOutFuelLights () {
    if (IoTConnected == true) {
        // basic.clearScreen()
        RainbowSparkleUnicorn.Light.turnOff(lightPins.P13)
        RainbowSparkleUnicorn.Light.turnOff(lightPins.P14)
        if (RainbowSparkleUnicorn.Switch.getSwitchState(switchPins.P8) == "H") {
            RainbowSparkleUnicorn.Light.turnOn(lightPins.P13)
        }
        if (RainbowSparkleUnicorn.Switch.getSwitchState(switchPins.P13) == "H") {
            RainbowSparkleUnicorn.Light.turnOn(lightPins.P14)
        }
    }
}
// RainbowSparkleUnicorn.IoT.sendMQTTMessage("spaceship-console/alert", "Normal")
RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.P0, function () {
    RainbowSparkleUnicorn.comment("Press red spinner to warp back to green")
    consoleState = "Normal"
    basic.showNumber(0)
})
RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.P8, function () {
    sortOutFuelLights()
})
let horizonTiming = 0
let sliderOrange = 0
let circularLightLoopPauseMs = 0
let alertStripLeft: neopixel.Strip = null
let alertStripRight: neopixel.Strip = null
let strip: neopixel.Strip = null
let switchStatus = ""
let touchStatus = ""
let IoTConnected = false
let consoleState = "Starting"
// enum ConsoleStates { Starting, Normal, VideoPlaying, YellowAlert, RedAlert }
let stateInCircularLightLoop = consoleState
let stateInCircularSoundLoop = consoleState
basic.showNumber(1)
RainbowSparkleUnicorn.start()
basic.showNumber(2)
RainbowSparkleUnicorn.Sound.setVolume(5)
RainbowSparkleUnicorn.Light.turnAllOff()
// This is the big red button
RainbowSparkleUnicorn.Light.turnOn(lightPins.P0)
RainbowSparkleUnicorn.Movement.setServoAngle(Servo.P8, horizonLevelAngle)
music.setBuiltInSpeakerEnabled(true)
RainbowSparkleUnicorn.Sound.playTrack(1)
basic.showNumber(3)
IoTConnected = false
control.raiseEvent(
5550,
EventBusValue.MICROBIT_EVT_ANY
)
consoleState = "Normal"
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the artificial horizon")
    artificialHorizon();
})
basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the pressure gauge")
    pressureGauge();

})
basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the sounds")
    if (stateInCircularSoundLoop != consoleState) {
        if (consoleState == "Normal") {
            RainbowSparkleUnicorn.Sound.playTrack(2)
        } else if (consoleState == "VideoPlaying") {
            RainbowSparkleUnicorn.Sound.pause()
        } else if (consoleState == "YellowAlert") {
            RainbowSparkleUnicorn.Sound.playTrack(3)
        } else if (consoleState == "RedAlert") {
            RainbowSparkleUnicorn.Sound.playTrack(1)
        }
    } else {
        if (stateInCircularSoundLoop == "Starting") {
            RainbowSparkleUnicorn.comment("Do nothing")
        } else if (stateInCircularSoundLoop == "Normal") {
            RainbowSparkleUnicorn.comment("Do nothing")
        } else if (stateInCircularSoundLoop == "VideoPlaying") {
            RainbowSparkleUnicorn.comment("Do nothing")
        } else if (stateInCircularSoundLoop == "YellowAlert") {
            RainbowSparkleUnicorn.comment("Do nothing")
        } else if (stateInCircularSoundLoop == "RedAlert") {
            RainbowSparkleUnicorn.comment("Check to see if the track is playing, once stopped then reduce to yellow alert")
            if (RainbowSparkleUnicorn.Sound.playingSound() == false) {
                consoleState = "YellowAlert"
            }
        }
    }
    RainbowSparkleUnicorn.comment("set the loop state to be the same as the console state as we have done the transition")
    stateInCircularSoundLoop = consoleState
    RainbowSparkleUnicorn.comment("pause for how long...")
    basic.pause(1000)
})
basic.forever(function () {
    touchStatus = RainbowSparkleUnicorn.Touch.getTouchStates()
    switchStatus = RainbowSparkleUnicorn.Switch.getSwitchStates()
    basic.pause(50)
})
basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the circular lights")
    if (strip == null) {
        RainbowSparkleUnicorn.comment("Setup green lights")
        strip = neopixel.create(DigitalPin.P1, 24, NeoPixelMode.RGB)
        alertStripRight = strip.range(0, 6)
        alertStripLeft = strip.range(12, 6)
        strip.setBrightness(255)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        strip.show()
    }
    circularLightLoopPauseMs = 1000
    RainbowSparkleUnicorn.comment("Need to check for a transition, so we can set up the lights")
    if (stateInCircularLightLoop != consoleState) {
        circularLightLoopPauseMs = 10
        if (consoleState == "Normal") {
            strip.setBrightness(30)
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
            strip.show()
        } else if (consoleState == "VideoPlaying") {
            strip.setBrightness(100)
            strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
            strip.show()
        } else if (consoleState == "YellowAlert") {
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            alertStripRight.setBrightness(100)
            alertStripLeft.setBrightness(100)
            alertStripRight.showColor(neopixel.colors(NeoPixelColors.Yellow))
            alertStripLeft.showColor(neopixel.colors(NeoPixelColors.Yellow))
        } else if (consoleState == "RedAlert") {
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            alertStripRight.setBrightness(255)
            alertStripRight.setBrightness(255)
            alertStripRight.showColor(neopixel.colors(NeoPixelColors.Red))
            alertStripLeft.showColor(neopixel.colors(NeoPixelColors.Red))
        }
    } else {
        if (stateInCircularLightLoop == "Starting") {
            RainbowSparkleUnicorn.comment("Do nothing as green light setup in transition")
        } else if (stateInCircularLightLoop == "Normal") {
            RainbowSparkleUnicorn.comment("Do nothing as green light setup in transition")
        } else if (stateInCircularLightLoop == "VideoPlaying") {
            RainbowSparkleUnicorn.comment("Do nothing as video playing light setup in transition")
        } else if (stateInCircularLightLoop == "YellowAlert") {
            RainbowSparkleUnicorn.comment("Just spin the light and change loop speed by altering pause time")
            strip.rotate(1)
            strip.show()
            circularLightLoopPauseMs = 50
        } else if (stateInCircularLightLoop == "RedAlert") {
            RainbowSparkleUnicorn.comment("Just spin the light and change loop speed by altering pause time")
            strip.rotate(1)
            strip.show()
            circularLightLoopPauseMs = 20
        }
    }
    RainbowSparkleUnicorn.comment("set the loop state to be the same as the console state as we have done the transition")
    stateInCircularLightLoop = consoleState
    RainbowSparkleUnicorn.comment("pause for how long...")
    basic.pause(circularLightLoopPauseMs)
})
basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the volume")
    sliderOrange = RainbowSparkleUnicorn.Controls.Slider1()
    // setVolumes()
    serial.writeValue("sliderOrange", sliderOrange)
    // RainbowSparkleUnicorn.Sound.setVolume(Math.map(100 - sliderOrange, 0, 100, 0, 30))
    // music.setVolume(Math.map(sliderOrange, 0, 100, 0, 255))
    basic.pause(1000)
})
basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the artificial horizon")
    horizonLevelAngle = 110
    if (consoleState == "Starting") {
        RainbowSparkleUnicorn.Movement.setServoAngle(Servo.P8, horizonLevelAngle)
        basic.pause(500)
        RainbowSparkleUnicorn.Movement.moveServoLinear(Servo.P8, horizonLevelAngle, horizonLevelAngle - 30, 2)
        basic.pause(2500)
    } else if (consoleState == "Normal") {
        RainbowSparkleUnicorn.comment("Timing in seconds")
        horizonTiming = 20
        RainbowSparkleUnicorn.Movement.moveServoLinear(Servo.P8, horizonLevelAngle - 30, horizonLevelAngle + 30, horizonTiming)
        basic.pause(horizonTiming * 1000 + 1000)
        RainbowSparkleUnicorn.Movement.moveServoLinear(Servo.P8, horizonLevelAngle + 30, horizonLevelAngle - 30, horizonTiming)
        basic.pause(horizonTiming * 1000 + 1000)
    } else if (consoleState == "RedAlert") {
        RainbowSparkleUnicorn.comment("Timing in seconds")
        horizonTiming = 10
        RainbowSparkleUnicorn.Movement.moveServoBouncy(Servo.P8, horizonLevelAngle - 50, horizonLevelAngle + 50, horizonTiming)
        basic.pause(horizonTiming * 1000 + 1000)
        RainbowSparkleUnicorn.Movement.moveServoBouncy(Servo.P8, horizonLevelAngle + 50, horizonLevelAngle - 50, horizonTiming)
        basic.pause(horizonTiming * 1000 + 1000)
    } else {
        RainbowSparkleUnicorn.Movement.setServoAngle(Servo.P8, horizonLevelAngle)
        basic.pause(2000)
    }
})
basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the pressure gauge")
    if (consoleState == "Normal") {
        RainbowSparkleUnicorn.comment("232 is 3v on to 0-255 scale")
        RainbowSparkleUnicorn.Controls.dial1(randint(0, 232))
        basic.pause(1000)
    } else {
        RainbowSparkleUnicorn.Controls.dial1(0)
        basic.pause(2000)
    }
})
basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the sounds")
    if (stateInCircularSoundLoop != consoleState) {
        if (consoleState == "Normal") {
            RainbowSparkleUnicorn.Sound.playTrack(2)
        } else if (consoleState == "VideoPlaying") {
            RainbowSparkleUnicorn.Sound.pause()
        } else if (consoleState == "YellowAlert") {
            RainbowSparkleUnicorn.Sound.playTrack(3)
        } else if (consoleState == "RedAlert") {
            RainbowSparkleUnicorn.Sound.playTrack(1)
        }
    } else {
        if (stateInCircularSoundLoop == "Starting") {
            RainbowSparkleUnicorn.comment("Do nothing")
        } else if (stateInCircularSoundLoop == "Normal") {
            RainbowSparkleUnicorn.comment("Do nothing")
        } else if (stateInCircularSoundLoop == "VideoPlaying") {
            RainbowSparkleUnicorn.comment("Do nothing")
        } else if (stateInCircularSoundLoop == "YellowAlert") {
            RainbowSparkleUnicorn.comment("Do nothing")
        } else if (stateInCircularSoundLoop == "RedAlert") {
            RainbowSparkleUnicorn.comment("Check to see if the track is playing, once stopped then reduce to yellow alert")
            if (RainbowSparkleUnicorn.Sound.playingSound() == false) {
                consoleState2 = "YellowAlert"
            }
        }
    }
    RainbowSparkleUnicorn.comment("set the loop state to be the same as the console state as we have done the transition")
    stateInCircularSoundLoop = consoleState
    RainbowSparkleUnicorn.comment("pause for how long...")
    basic.pause(1000)
})
basic.forever(function () {
    touchStatus = RainbowSparkleUnicorn.Touch.getTouchStates()
    switchStatus = RainbowSparkleUnicorn.Switch.getSwitchStates()
    basic.pause(50)
})
basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the circular lights")
    if (strip == null) {
        RainbowSparkleUnicorn.comment("Setup green lights")
        strip = neopixel.create(DigitalPin.P1, 24, NeoPixelMode.RGB)
        alertStripRight = strip.range(0, 6)
        alertStripLeft = strip.range(12, 6)
        strip.setBrightness(255)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        strip.show()
    }
    circularLightLoopPauseMs = 1000
    RainbowSparkleUnicorn.comment("Need to check for a transition, so we can set up the lights")
    if (stateInCircularLightLoop != consoleState) {
        circularLightLoopPauseMs = 10
        if (consoleState == "Normal") {
            strip.setBrightness(30)
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
            strip.show()
        } else if (consoleState == "VideoPlaying") {
            strip.setBrightness(100)
            strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
            strip.show()
        } else if (consoleState == "YellowAlert") {
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            alertStripRight.setBrightness(100)
            alertStripLeft.setBrightness(100)
            alertStripRight.showColor(neopixel.colors(NeoPixelColors.Yellow))
            alertStripLeft.showColor(neopixel.colors(NeoPixelColors.Yellow))
        } else if (consoleState == "RedAlert") {
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            alertStripRight.setBrightness(255)
            alertStripRight.setBrightness(255)
            alertStripRight.showColor(neopixel.colors(NeoPixelColors.Red))
            alertStripLeft.showColor(neopixel.colors(NeoPixelColors.Red))
        }
    } else {
        if (stateInCircularLightLoop == "Starting") {
            RainbowSparkleUnicorn.comment("Do nothing as green light setup in transition")
        } else if (stateInCircularLightLoop == "Normal") {
            RainbowSparkleUnicorn.comment("Do nothing as green light setup in transition")
        } else if (stateInCircularLightLoop == "VideoPlaying") {
            RainbowSparkleUnicorn.comment("Do nothing as video playing light setup in transition")
        } else if (stateInCircularLightLoop == "YellowAlert") {
            RainbowSparkleUnicorn.comment("Just spin the light and change loop speed by altering pause time")
            strip.rotate(1)
            strip.show()
            circularLightLoopPauseMs = 50
        } else if (stateInCircularLightLoop == "RedAlert") {
            RainbowSparkleUnicorn.comment("Just spin the light and change loop speed by altering pause time")
            strip.rotate(1)
            strip.show()
            circularLightLoopPauseMs = 20
        }
    }
    RainbowSparkleUnicorn.comment("set the loop state to be the same as the console state as we have done the transition")
    stateInCircularLightLoop = consoleState
    RainbowSparkleUnicorn.comment("pause for how long...")
    basic.pause(circularLightLoopPauseMs)
})
basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the volume")
    sliderOrange = RainbowSparkleUnicorn.Controls.Slider1()
    // setVolumes()
    serial.writeValue("sliderOrange", sliderOrange)
    // RainbowSparkleUnicorn.Sound.setVolume(Math.map(100 - sliderOrange, 0, 100, 0, 30))
    // music.setVolume(Math.map(sliderOrange, 0, 100, 0, 255))
    basic.pause(1000)
})
basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the artificial horizon")
    artificialHorizon();
sortOutFuelLights()
})
basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the pressure gauge")
    if (consoleState == "Normal") {
        RainbowSparkleUnicorn.comment("232 is 3v on to 0-255 scale")
        RainbowSparkleUnicorn.Controls.dial1(randint(0, 232))
        basic.pause(1000)
    } else {
        RainbowSparkleUnicorn.Controls.dial1(0)
        basic.pause(2000)
    }
})
basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the sounds")
    if (stateInCircularSoundLoop != consoleState) {
        if (consoleState == "Normal") {
            RainbowSparkleUnicorn.Sound.playTrack(2)
        } else if (consoleState == "VideoPlaying") {
            RainbowSparkleUnicorn.Sound.pause()
        } else if (consoleState == "YellowAlert") {
            RainbowSparkleUnicorn.Sound.playTrack(3)
        } else if (consoleState == "RedAlert") {
            RainbowSparkleUnicorn.Sound.playTrack(1)
        }
    } else {
        if (stateInCircularSoundLoop == "Starting") {
            RainbowSparkleUnicorn.comment("Do nothing")
        } else if (stateInCircularSoundLoop == "Normal") {
            RainbowSparkleUnicorn.comment("Do nothing")
        } else if (stateInCircularSoundLoop == "VideoPlaying") {
            RainbowSparkleUnicorn.comment("Do nothing")
        } else if (stateInCircularSoundLoop == "YellowAlert") {
            RainbowSparkleUnicorn.comment("Do nothing")
        } else if (stateInCircularSoundLoop == "RedAlert") {
            RainbowSparkleUnicorn.comment("Check to see if the track is playing, once stopped then reduce to yellow alert")
            if (RainbowSparkleUnicorn.Sound.playingSound() == false) {
                consoleState = "YellowAlert"
            }
        }
    }
    RainbowSparkleUnicorn.comment("set the loop state to be the same as the console state as we have done the transition")
    stateInCircularSoundLoop = consoleState
    RainbowSparkleUnicorn.comment("pause for how long...")
    basic.pause(1000)
})
basic.forever(function () {
    touchStatus = RainbowSparkleUnicorn.Touch.getTouchStates()
    switchStatus = RainbowSparkleUnicorn.Switch.getSwitchStates()
    basic.pause(50)
})
basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the circular lights")
    if (strip == null) {
        RainbowSparkleUnicorn.comment("Setup green lights")
        strip = neopixel.create(DigitalPin.P1, 24, NeoPixelMode.RGB)
        alertStripRight = strip.range(0, 6)
        alertStripLeft = strip.range(12, 6)
        strip.setBrightness(255)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        strip.show()
    }
    circularLightLoopPauseMs = 1000
    RainbowSparkleUnicorn.comment("Need to check for a transition, so we can set up the lights")
    if (stateInCircularLightLoop != consoleState) {
        circularLightLoopPauseMs = 10
        if (consoleState == "Normal") {
            strip.setBrightness(30)
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
            strip.show()
        } else if (consoleState == "VideoPlaying") {
            strip.setBrightness(100)
            strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
            strip.show()
        } else if (consoleState == "YellowAlert") {
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            alertStripRight.setBrightness(100)
            alertStripLeft.setBrightness(100)
            alertStripRight.showColor(neopixel.colors(NeoPixelColors.Yellow))
            alertStripLeft.showColor(neopixel.colors(NeoPixelColors.Yellow))
        } else if (consoleState == "RedAlert") {
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            alertStripRight.setBrightness(255)
            alertStripRight.setBrightness(255)
            alertStripRight.showColor(neopixel.colors(NeoPixelColors.Red))
            alertStripLeft.showColor(neopixel.colors(NeoPixelColors.Red))
        }
    } else {
        if (stateInCircularLightLoop == "Starting") {
            RainbowSparkleUnicorn.comment("Do nothing as green light setup in transition")
        } else if (stateInCircularLightLoop == "Normal") {
            RainbowSparkleUnicorn.comment("Do nothing as green light setup in transition")
        } else if (stateInCircularLightLoop == "VideoPlaying") {
            RainbowSparkleUnicorn.comment("Do nothing as video playing light setup in transition")
        } else if (stateInCircularLightLoop == "YellowAlert") {
            RainbowSparkleUnicorn.comment("Just spin the light and change loop speed by altering pause time")
            strip.rotate(1)
            strip.show()
            circularLightLoopPauseMs = 50
        } else if (stateInCircularLightLoop == "RedAlert") {
            RainbowSparkleUnicorn.comment("Just spin the light and change loop speed by altering pause time")
            strip.rotate(1)
            strip.show()
            circularLightLoopPauseMs = 20
        }
    }
    RainbowSparkleUnicorn.comment("set the loop state to be the same as the console state as we have done the transition")
    stateInCircularLightLoop = consoleState
    RainbowSparkleUnicorn.comment("pause for how long...")
    basic.pause(circularLightLoopPauseMs)
})
basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the volume")
    sliderOrange = RainbowSparkleUnicorn.Controls.Slider1()
    // setVolumes()
    serial.writeValue("sliderOrange", sliderOrange)
    // RainbowSparkleUnicorn.Sound.setVolume(Math.map(100 - sliderOrange, 0, 100, 0, 30))
    // music.setVolume(Math.map(sliderOrange, 0, 100, 0, 255))
    basic.pause(1000)
})
basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the artificial horizon")
    horizonLevelAngle = 110
    if (consoleState == "Starting") {
        RainbowSparkleUnicorn.Movement.setServoAngle(Servo.P8, horizonLevelAngle)
        basic.pause(500)
        RainbowSparkleUnicorn.Movement.moveServoLinear(Servo.P8, horizonLevelAngle, horizonLevelAngle - 30, 2)
        basic.pause(2500)
    } else if (consoleState == "Normal") {
        RainbowSparkleUnicorn.comment("Timing in seconds")
        horizonTiming = 20
        RainbowSparkleUnicorn.Movement.moveServoLinear(Servo.P8, horizonLevelAngle - 30, horizonLevelAngle + 30, horizonTiming)
        basic.pause(horizonTiming * 1000 + 1000)
        RainbowSparkleUnicorn.Movement.moveServoLinear(Servo.P8, horizonLevelAngle + 30, horizonLevelAngle - 30, horizonTiming)
        basic.pause(horizonTiming * 1000 + 1000)
    } else if (consoleState == "RedAlert") {
        RainbowSparkleUnicorn.comment("Timing in seconds")
        horizonTiming = 10
        RainbowSparkleUnicorn.Movement.moveServoBouncy(Servo.P8, horizonLevelAngle - 50, horizonLevelAngle + 50, horizonTiming)
        basic.pause(horizonTiming * 1000 + 1000)
        RainbowSparkleUnicorn.Movement.moveServoBouncy(Servo.P8, horizonLevelAngle + 50, horizonLevelAngle - 50, horizonTiming)
        basic.pause(horizonTiming * 1000 + 1000)
    } else {
        RainbowSparkleUnicorn.Movement.setServoAngle(Servo.P8, horizonLevelAngle)
        basic.pause(2000)
    }
})
basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the pressure gauge")
    if (consoleState == "Normal") {
        RainbowSparkleUnicorn.comment("232 is 3v on to 0-255 scale")
        RainbowSparkleUnicorn.Controls.dial1(randint(0, 232))
        basic.pause(1000)
    } else {
        RainbowSparkleUnicorn.Controls.dial1(0)
        basic.pause(2000)
    }
})
basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the sounds")
    if (stateInCircularSoundLoop != consoleState) {
        if (consoleState == "Normal") {
            RainbowSparkleUnicorn.Sound.playTrack(2)
        } else if (consoleState == "VideoPlaying") {
            RainbowSparkleUnicorn.Sound.pause()
        } else if (consoleState == "YellowAlert") {
            RainbowSparkleUnicorn.Sound.playTrack(3)
        } else if (consoleState == "RedAlert") {
            RainbowSparkleUnicorn.Sound.playTrack(1)
        }
    } else {
        if (stateInCircularSoundLoop == "Starting") {
            RainbowSparkleUnicorn.comment("Do nothing")
        } else if (stateInCircularSoundLoop == "Normal") {
            RainbowSparkleUnicorn.comment("Do nothing")
        } else if (stateInCircularSoundLoop == "VideoPlaying") {
            RainbowSparkleUnicorn.comment("Do nothing")
        } else if (stateInCircularSoundLoop == "YellowAlert") {
            RainbowSparkleUnicorn.comment("Do nothing")
        } else if (stateInCircularSoundLoop == "RedAlert") {
            RainbowSparkleUnicorn.comment("Check to see if the track is playing, once stopped then reduce to yellow alert")
            if (RainbowSparkleUnicorn.Sound.playingSound() == false) {
                consoleState = "YellowAlert"
            }
        }
    }
    RainbowSparkleUnicorn.comment("set the loop state to be the same as the console state as we have done the transition")
    stateInCircularSoundLoop = consoleState
    RainbowSparkleUnicorn.comment("pause for how long...")
    basic.pause(1000)
})
basic.forever(function () {
    touchStatus = RainbowSparkleUnicorn.Touch.getTouchStates()
    switchStatus = RainbowSparkleUnicorn.Switch.getSwitchStates()
    basic.pause(50)
})
basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the circular lights")
    if (strip == null) {
        RainbowSparkleUnicorn.comment("Setup green lights")
        strip = neopixel.create(DigitalPin.P1, 24, NeoPixelMode.RGB)
        alertStripRight = strip.range(0, 6)
        alertStripLeft = strip.range(12, 6)
        strip.setBrightness(255)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        strip.show()
    }
    circularLightLoopPauseMs = 1000
    RainbowSparkleUnicorn.comment("Need to check for a transition, so we can set up the lights")
    if (stateInCircularLightLoop != consoleState) {
        circularLightLoopPauseMs = 10
        if (consoleState == "Normal") {
            strip.setBrightness(30)
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
            strip.show()
        } else if (consoleState == "VideoPlaying") {
            strip.setBrightness(100)
            strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
            strip.show()
        } else if (consoleState == "YellowAlert") {
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            alertStripRight.setBrightness(100)
            alertStripLeft.setBrightness(100)
            alertStripRight.showColor(neopixel.colors(NeoPixelColors.Yellow))
            alertStripLeft.showColor(neopixel.colors(NeoPixelColors.Yellow))
        } else if (consoleState == "RedAlert") {
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            alertStripRight.setBrightness(255)
            alertStripRight.setBrightness(255)
            alertStripRight.showColor(neopixel.colors(NeoPixelColors.Red))
            alertStripLeft.showColor(neopixel.colors(NeoPixelColors.Red))
        }
    } else {
        if (stateInCircularLightLoop == "Starting") {
            RainbowSparkleUnicorn.comment("Do nothing as green light setup in transition")
        } else if (stateInCircularLightLoop == "Normal") {
            RainbowSparkleUnicorn.comment("Do nothing as green light setup in transition")
        } else if (stateInCircularLightLoop == "VideoPlaying") {
            RainbowSparkleUnicorn.comment("Do nothing as video playing light setup in transition")
        } else if (stateInCircularLightLoop == "YellowAlert") {
            RainbowSparkleUnicorn.comment("Just spin the light and change loop speed by altering pause time")
            strip.rotate(1)
            strip.show()
            circularLightLoopPauseMs = 50
        } else if (stateInCircularLightLoop == "RedAlert") {
            RainbowSparkleUnicorn.comment("Just spin the light and change loop speed by altering pause time")
            strip.rotate(1)
            strip.show()
            circularLightLoopPauseMs = 20
        }
    }
    RainbowSparkleUnicorn.comment("set the loop state to be the same as the console state as we have done the transition")
    stateInCircularLightLoop = consoleState
    RainbowSparkleUnicorn.comment("pause for how long...")
    basic.pause(circularLightLoopPauseMs)
})
basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the volume")
    sliderOrange = RainbowSparkleUnicorn.Controls.Slider1()
    // setVolumes()
    serial.writeValue("sliderOrange", sliderOrange)
    // RainbowSparkleUnicorn.Sound.setVolume(Math.map(100 - sliderOrange, 0, 100, 0, 30))
    // music.setVolume(Math.map(sliderOrange, 0, 100, 0, 255))
    basic.pause(1000)
})
