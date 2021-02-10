control.onEvent(5550, EventBusValue.MICROBIT_EVT_ANY, function () {
    // Pink Right Light
    RainbowSparkleUnicorn.Light.blink(lightPins.P8, 500, 500)
    // Pink Left Light
    RainbowSparkleUnicorn.Light.blink(lightPins.P9, 500, 500)
    keyA = "qdDjMxAz"
    keyB = "LvQPRk6u"
    RainbowSparkleUnicorn.IoT.connectToInterWeb(
    "152 2.4GHz",
    "derwenthorpe",
    "targetarchitecture.cloud.shiftr.io",
    "targetarchitecture",
    "" + keyA + keyB,
    "Spaceship Console"
    )
    IoTConnected = true
    RainbowSparkleUnicorn.Light.turnOff(lightPins.P8)
    RainbowSparkleUnicorn.Light.turnOff(lightPins.P9)
    sortOutFuelLights()
})
RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.P2, function () {
    consoleState = ConsoleStates.YellowAlert
RainbowSparkleUnicorn.Sound.playTrack(1)
    while (true) {
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
        if (RainbowSparkleUnicorn.Sound.playingSound() == false) {
            break;
        }
    }
    basic.showIcon(IconNames.Sad)
})
input.onButtonPressed(Button.A, function () {
    consoleState = ConsoleStates.VideoPlaying
})
RainbowSparkleUnicorn.Switch.onSwitchReleased(switchPins.P4, function () {
    sortOutFuelLights()
})
RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.P5, function () {
    sortOutFuelLights()
})
RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.P4, function () {
    sortOutFuelLights()
})
input.onButtonPressed(Button.B, function () {
    consoleState = ConsoleStates.Normal
})
function sortOutFuelLights () {
    basic.clearScreen()
    RainbowSparkleUnicorn.Light.turnOff(lightPins.P9)
    RainbowSparkleUnicorn.Light.turnOff(lightPins.P8)
    if (RainbowSparkleUnicorn.Switch.getSwitchState(switchPins.P4) == 1) {
        RainbowSparkleUnicorn.Light.turnOn(lightPins.P9)
    }
    if (RainbowSparkleUnicorn.Switch.getSwitchState(switchPins.P5) == 1) {
        RainbowSparkleUnicorn.Light.turnOn(lightPins.P8)
    }
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    consoleState = ConsoleStates.RedAlert
})
RainbowSparkleUnicorn.Switch.onSwitchReleased(switchPins.P5, function () {
    sortOutFuelLights()
})
let circularLightLoopPauseMs = 0
let horizonTiming = 0
let keyB = ""
let keyA = ""
let IoTConnected = false
enum ConsoleStates {Starting =0  , Normal=1, VideoPlaying=2, YellowAlert=3, RedAlert=4 }
let stateInCircularLightLoop = ConsoleStates.Starting
let consoleState = ConsoleStates.Starting
basic.showNumber(1)
let strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
let alertStrip = strip.range(0, 10)
strip.setBrightness(255)
strip.showColor(neopixel.colors(NeoPixelColors.Green))
strip.show()
basic.showNumber(2)
RainbowSparkleUnicorn.start()
RainbowSparkleUnicorn.printDebugMessages()
RainbowSparkleUnicorn.printReceivedMessages()
basic.showNumber(3)
RainbowSparkleUnicorn.Light.turnAllOff()
// This is the big red button
RainbowSparkleUnicorn.Light.turnOn(lightPins.P15)
RainbowSparkleUnicorn.Sound.setVolume(2)
RainbowSparkleUnicorn.Sound.playTrack(2)
let horizonLevelAngle = 110
RainbowSparkleUnicorn.Movement.setServoAngle(Servo.P0, horizonLevelAngle)
basic.showNumber(4)
IoTConnected = false
control.raiseEvent(
5550,
EventBusValue.MICROBIT_EVT_ANY
)
consoleState = ConsoleStates.Normal
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    comment.comment("This loop controls the artificial horizon")
    if (consoleState == ConsoleStates.Starting) {
        serial.writeLine("This loop controls the artificial horizon")
        horizonLevelAngle = 110
        RainbowSparkleUnicorn.Movement.setServoAngle(Servo.P0, horizonLevelAngle)
        basic.pause(500)
        RainbowSparkleUnicorn.Movement.moveServoLinear(Servo.P0, horizonLevelAngle, horizonLevelAngle - 30, 2)
        basic.pause(2500)
    } else if (consoleState == ConsoleStates.Normal) {
        horizonTiming = 20
        serial.writeLine("moveServoLinear")
        RainbowSparkleUnicorn.Movement.moveServoLinear(Servo.P0, horizonLevelAngle - 30, horizonLevelAngle + 30, horizonTiming)
        basic.pause(horizonTiming * 1000 + 1000)
        serial.writeLine("moveServoLinear")
        RainbowSparkleUnicorn.Movement.moveServoLinear(Servo.P0, horizonLevelAngle + 30, horizonLevelAngle - 30, horizonTiming)
        basic.pause(horizonTiming * 1000 + 1000)
    }
})
basic.forever(function () {
    comment.comment("This loop controls the circular lights")
    circularLightLoopPauseMs = 1000
    comment.comment("Need to check for a transition, so we can set up the lights")
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
            alertStrip.setBrightness(100)
            alertStrip.showColor(neopixel.colors(NeoPixelColors.Yellow))
            alertStrip.show()
        } else if (consoleState == ConsoleStates.RedAlert) {
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            alertStrip.setBrightness(255)
            alertStrip.showColor(neopixel.colors(NeoPixelColors.Red))
            alertStrip.show()
        }
    } else {
        if (stateInCircularLightLoop == ConsoleStates.Starting) {
            comment.comment("Do nothing as green light setup in start block")
        } else if (stateInCircularLightLoop == ConsoleStates.Normal) {
            comment.comment("Do nothing as green light setup in transition")
        } else if (stateInCircularLightLoop == ConsoleStates.VideoPlaying) {
            comment.comment("Do nothing as video playing light setup in transition")
        } else if (stateInCircularLightLoop == ConsoleStates.YellowAlert) {
            comment.comment("Just spin the light and change loop speed by altering pause time")
            strip.rotate(1)
            strip.show()
            circularLightLoopPauseMs = 50
        } else if (stateInCircularLightLoop == ConsoleStates.RedAlert) {
            comment.comment("Just spin the light and change loop speed by altering pause time")
            strip.rotate(1)
            strip.show()
            circularLightLoopPauseMs = 20
        }
    }
    comment.comment("set the loop state to be the same as the console state as we have done the transition")
    stateInCircularLightLoop = consoleState
    comment.comment("pause for how long...")
    basic.pause(circularLightLoopPauseMs)
})
basic.forever(function () {
    comment.comment("This loop controls the gauge")
    if (consoleState == ConsoleStates.Normal) {
        RainbowSparkleUnicorn.Controls.dial1(randint(0, 30))
        basic.pause(1000)
    } else {
        RainbowSparkleUnicorn.Controls.dial1(0)
        basic.pause(2000)
    }
})
