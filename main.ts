control.onEvent(5550, EventBusValue.MICROBIT_EVT_ANY, function () {
    // Pink Right Light
    RainbowSparkleUnicorn.Light.turnOff(lightPins.P13)
    RainbowSparkleUnicorn.Light.blink(lightPins.P13, 500, 500)
    // Pink Left Light
    RainbowSparkleUnicorn.Light.turnOff(lightPins.P14)
    RainbowSparkleUnicorn.Light.blink(lightPins.P14, 500, 500)
    RainbowSparkleUnicorn.IoT.connectToInterWeb(
    "152 2.4GHz",
    "derwenthorpe",
    "robotmqtt",
    "public",
    "public",
    "Spaceship Console"
    )
    RainbowSparkleUnicorn.IoT.startReceivingMessages("spaceship-console")
    IoTConnected = true
    RainbowSparkleUnicorn.Light.turnOff(lightPins.P13)
    RainbowSparkleUnicorn.Light.turnOff(lightPins.P14)
    sortOutFuelLights()
})
RainbowSparkleUnicorn.Switch.onSwitchReleased(switchPins.P13, function () {
    sortOutFuelLights()
})
RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.P1, function () {
    consoleState = ConsoleStates.RedAlert
RainbowSparkleUnicorn.IoT.sendMQTTMessage("spaceship-console", "Red Alert")
})
RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.P13, function () {
    sortOutFuelLights()
})
RainbowSparkleUnicorn.Switch.onSwitchReleased(switchPins.P8, function () {
    sortOutFuelLights()
})
function sortOutFuelLights () {
    if (IoTConnected == true) {
        basic.clearScreen()
        RainbowSparkleUnicorn.Light.turnOff(lightPins.P13)
        RainbowSparkleUnicorn.Light.turnOff(lightPins.P14)
        if (RainbowSparkleUnicorn.Switch.getSwitchState(switchPins.P8) == 1) {
            RainbowSparkleUnicorn.Light.turnOn(lightPins.P13)
        }
        if (RainbowSparkleUnicorn.Switch.getSwitchState(switchPins.P13) == 1) {
            RainbowSparkleUnicorn.Light.turnOn(lightPins.P14)
        }
    }
}
RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.P0, function () {
    RainbowSparkleUnicorn.comment("Press red spinner to warp back to green")
    consoleState = ConsoleStates.Normal
})
RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.P8, function () {
    sortOutFuelLights()
})
let circularLightLoopPauseMs = 0
let alertStripLeft: neopixel.Strip = null
let alertStripRight: neopixel.Strip = null
let strip: neopixel.Strip = null
let sliderYellow = 0
let sliderOrange = 0
let horizonTiming = 0
let IoTConnected = false
enum ConsoleStates {Starting , Normal, VideoPlaying, YellowAlert, RedAlert}
let stateInCircularLightLoop = ConsoleStates.Starting
let stateInCircularSoundLoop = ConsoleStates.Starting
let consoleState = ConsoleStates.Starting
basic.showNumber(1)
RainbowSparkleUnicorn.start()
RainbowSparkleUnicorn.printDebugMessages()
RainbowSparkleUnicorn.printReceivedMessages()
basic.showNumber(2)
RainbowSparkleUnicorn.Sound.setVolume(5)
RainbowSparkleUnicorn.Light.turnAllOff()
RainbowSparkleUnicorn.Controls.turnSlider1(OnOff.ON)
RainbowSparkleUnicorn.Controls.turnSlider2(OnOff.ON)
// This is the big red button
RainbowSparkleUnicorn.Light.turnOn(lightPins.P0)
let horizonLevelAngle = 110
RainbowSparkleUnicorn.Movement.setServoAngle(Servo.P8, horizonLevelAngle)
music.setBuiltInSpeakerEnabled(true)
basic.showNumber(3)
IoTConnected = false
control.raiseEvent(
5550,
EventBusValue.MICROBIT_EVT_ANY
)
consoleState = ConsoleStates.Normal
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the gauge")
    if (consoleState == ConsoleStates.Normal) {
        RainbowSparkleUnicorn.comment("232 is 3v on to 0-255 scale")
        RainbowSparkleUnicorn.Controls.dial1(randint(0, 232))
        basic.pause(1000)
    } else {
        RainbowSparkleUnicorn.Controls.dial1(0)
        basic.pause(2000)
    }
})
basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the artificial horizon")
    horizonLevelAngle = 110
    if (consoleState == ConsoleStates.Starting) {
        RainbowSparkleUnicorn.Movement.setServoAngle(Servo.P8, horizonLevelAngle)
        basic.pause(500)
        RainbowSparkleUnicorn.Movement.moveServoLinear(Servo.P8, horizonLevelAngle, horizonLevelAngle - 30, 2)
        basic.pause(2500)
    } else if (consoleState == ConsoleStates.Normal) {
        RainbowSparkleUnicorn.comment("Timing in seconds")
        horizonTiming = 20
        RainbowSparkleUnicorn.Movement.moveServoLinear(Servo.P8, horizonLevelAngle - 30, horizonLevelAngle + 30, horizonTiming)
        basic.pause(horizonTiming * 1000 + 1000)
        RainbowSparkleUnicorn.Movement.moveServoLinear(Servo.P8, horizonLevelAngle + 30, horizonLevelAngle - 30, horizonTiming)
        basic.pause(horizonTiming * 1000 + 1000)
    } else if (consoleState == ConsoleStates.RedAlert) {
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
    RainbowSparkleUnicorn.comment("This loop controls the sounds")
    if (stateInCircularSoundLoop != consoleState) {
        if (consoleState == ConsoleStates.Normal) {
            RainbowSparkleUnicorn.Sound.playTrack(2)
        } else if (consoleState == ConsoleStates.VideoPlaying) {
            RainbowSparkleUnicorn.Sound.pause()
        } else if (consoleState == ConsoleStates.YellowAlert) {
        	
        } else if (consoleState == ConsoleStates.RedAlert) {
            RainbowSparkleUnicorn.Sound.playTrack(1)
        }
    } else {
        if (stateInCircularSoundLoop == ConsoleStates.Starting) {
            RainbowSparkleUnicorn.comment("Do nothing")
        } else if (stateInCircularSoundLoop == ConsoleStates.Normal) {
            RainbowSparkleUnicorn.comment("Do nothing")
        } else if (stateInCircularSoundLoop == ConsoleStates.VideoPlaying) {
            RainbowSparkleUnicorn.comment("Do nothing")
        } else if (stateInCircularSoundLoop == ConsoleStates.YellowAlert) {
            RainbowSparkleUnicorn.comment("Do nothing")
        } else if (stateInCircularSoundLoop == ConsoleStates.RedAlert) {
            RainbowSparkleUnicorn.comment("Check to see if the track is playing, once stopped then reduce to yellow alert")
            if (RainbowSparkleUnicorn.Sound.playingSound() == false) {
                let consoleState2 = ConsoleStates.YellowAlert
            }
        }
    }
    RainbowSparkleUnicorn.comment("set the loop state to be the same as the console state as we have done the transition")
    stateInCircularSoundLoop = consoleState
    RainbowSparkleUnicorn.comment("pause for how long...")
    basic.pause(1000)
})
basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop reads the slider values")
    basic.pause(500)
    if (sliderOrange != RainbowSparkleUnicorn.Controls.Slider1()) {
        sliderOrange = RainbowSparkleUnicorn.Controls.Slider1()
        RainbowSparkleUnicorn.Sound.setVolume(Math.map(100 - sliderOrange, 0, 100, 0, 30))
    }
    RainbowSparkleUnicorn.comment("When the slider moves play a note")
    if (sliderYellow != RainbowSparkleUnicorn.Controls.Slider2()) {
        sliderYellow = RainbowSparkleUnicorn.Controls.Slider2()
        //music.ringTone(Math.map(sliderYellow, 0, 100, 131, 262))
       // music.setPlayTone(Math.map(sliderYellow, 0, 100, 131, 262),500)
        serial.writeValue("hz", Math.map(sliderYellow, 0, 100, 131, 262))
    } else {
        serial.writeValue("hz", 0)
    }
    serial.writeValue("yellow", sliderYellow)
    serial.writeValue("orange", sliderOrange)
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
        if (consoleState == ConsoleStates.Normal) {
            strip.setBrightness(30)
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
            strip.show()
        } else if (consoleState == ConsoleStates.VideoPlaying) {
            strip.setBrightness(100)
            strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
            strip.show()
        } else if (consoleState == ConsoleStates.YellowAlert) {
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            alertStripRight.setBrightness(100)
            alertStripLeft.setBrightness(100)
            alertStripRight.showColor(neopixel.colors(NeoPixelColors.Yellow))
            alertStripLeft.showColor(neopixel.colors(NeoPixelColors.Yellow))
        } else if (consoleState == ConsoleStates.RedAlert) {
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            alertStripRight.setBrightness(255)
            alertStripRight.setBrightness(255)
            alertStripRight.showColor(neopixel.colors(NeoPixelColors.Red))
            alertStripLeft.showColor(neopixel.colors(NeoPixelColors.Red))
        }
    } else {
        if (stateInCircularLightLoop == ConsoleStates.Starting) {
            RainbowSparkleUnicorn.comment("Do nothing as green light setup in transition")
        } else if (stateInCircularLightLoop == ConsoleStates.Normal) {
            RainbowSparkleUnicorn.comment("Do nothing as green light setup in transition")
        } else if (stateInCircularLightLoop == ConsoleStates.VideoPlaying) {
            RainbowSparkleUnicorn.comment("Do nothing as video playing light setup in transition")
        } else if (stateInCircularLightLoop == ConsoleStates.YellowAlert) {
            RainbowSparkleUnicorn.comment("Just spin the light and change loop speed by altering pause time")
            strip.rotate(1)
            strip.show()
            circularLightLoopPauseMs = 50
        } else if (stateInCircularLightLoop == ConsoleStates.RedAlert) {
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
