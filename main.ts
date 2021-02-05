RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.P2, function () {
    consoleState = 3
    RainbowSparkleUnicorn.Sound.playTrack(1)
})
input.onButtonPressed(Button.A, function () {
    consoleState = 2
})
input.onButtonPressed(Button.B, function () {
    consoleState = 1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    consoleState = 4
})
/**
 * enum ConsoleStates {Starting =0  , Normal=1, VideoPlaying=2, YellowAlert=3, RedAlert=4 }
 */
/**
 * let circularLightLoopPauseMs = 0
 */
let stateInCircularLightLoop = 0
let circularLightLoopPauseMs = 0
let consoleState = 0
RainbowSparkleUnicorn.start()
RainbowSparkleUnicorn.printDebugMessages()
RainbowSparkleUnicorn.printReceivedMessages()
RainbowSparkleUnicorn.Light.turnAllOn()
RainbowSparkleUnicorn.Sound.setVolume(10)
RainbowSparkleUnicorn.Sound.playTrack(2)
let strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
let half = strip.range(0, 10)
consoleState = 1
basic.forever(function () {
    comment.comment("This loop controls the gauge")
    if (consoleState == 1) {
        RainbowSparkleUnicorn.Controls.dial1(randint(0, 30))
    } else {
        RainbowSparkleUnicorn.Controls.dial1(0)
    }
    basic.pause(2000)
})
basic.forever(function () {
    comment.comment("This loop controls the circular lights")
    circularLightLoopPauseMs = 1000
    comment.comment("Need to check for a transition, so we can set up the lights")
    if (stateInCircularLightLoop != consoleState) {
        if (consoleState == 1) {
            serial.writeLine("1.1")
            strip.setBrightness(30)
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
            strip.show()
        } else if (consoleState == 2) {
            serial.writeLine("2.1")
            strip.setBrightness(100)
            strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
            strip.show()
        } else if (consoleState == 3) {
            serial.writeLine("3.1")
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            half.setBrightness(100)
            half.showColor(neopixel.colors(NeoPixelColors.Yellow))
            half.show()
        } else if (consoleState == 4) {
            serial.writeLine("4.1")
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            half.setBrightness(255)
            half.showColor(neopixel.colors(NeoPixelColors.Red))
            half.show()
        } else {
            comment.comment("Should never have no state")
        }
    }
    if (stateInCircularLightLoop == 0) {
        serial.writeLine("0")
        comment.comment("This loop is fairly fixed to setup green")
    } else if (stateInCircularLightLoop == 1) {
        serial.writeLine("1")
    } else if (stateInCircularLightLoop == 2) {
        serial.writeLine("2")
    } else if (stateInCircularLightLoop == 3) {
        comment.comment("Need to check for a transition, so we can set up the light")
        serial.writeLine("3")
        comment.comment("Just spin the light and reduce loop speed")
        strip.rotate(1)
        strip.show()
        circularLightLoopPauseMs = 50
    } else if (stateInCircularLightLoop == 4) {
        serial.writeLine("4")
        strip.rotate(1)
        strip.show()
        circularLightLoopPauseMs = 20
    } else {
        comment.comment("Should never have no state")
    }
    // serial.writeLine("stateInCircularLightLoop: " + stateInCircularLightLoop + " consoleState: " + consoleState)
    stateInCircularLightLoop = consoleState
    basic.pause(circularLightLoopPauseMs)
})
