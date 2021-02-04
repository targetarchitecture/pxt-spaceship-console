RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.P2, function () {
    consoleState = ConsoleStates.YellowAlert;
RainbowSparkleUnicorn.Sound.playTrack(1)
})
input.onButtonPressed(Button.A, function () {
    consoleState = ConsoleStates.VideoPlaying;
})
input.onButtonPressed(Button.B, function () {
    consoleState = ConsoleStates.Normal;
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    consoleState = ConsoleStates.RedAlert;
})
let half: neopixel.Strip = null
let strip: neopixel.Strip = null
let rotateLEDs = 0
let circularLightTiming = 0
enum ConsoleStates {Starting , Normal, VideoPlaying, YellowAlert, RedAlert }
RainbowSparkleUnicorn.start()
RainbowSparkleUnicorn.printDebugMessages()
RainbowSparkleUnicorn.printReceivedMessages()
RainbowSparkleUnicorn.Light.turnAllOn()
RainbowSparkleUnicorn.Sound.setVolume(10)
RainbowSparkleUnicorn.Sound.playTrack(2)
let consoleState = ConsoleStates.Starting;
basic.forever(function () {
    comment.comment("This loop controls the gauge")
    if (consoleState == ConsoleStates.Normal) {
        RainbowSparkleUnicorn.Controls.dial1(randint(0, 30))
    } else {
        RainbowSparkleUnicorn.Controls.dial1(0)
    }
    basic.pause(2000)
})
basic.forever(function () {
    comment.comment("This loop controls the circular lights")
    circularLightTiming = 2000
    if (consoleState == ConsoleStates.Starting) {
        rotateLEDs = 0
        strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
        half = strip.range(0, 10)
        strip.setBrightness(100)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        strip.show()
    } else if (consoleState == ConsoleStates.Normal) {
        strip.setBrightness(30)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        strip.show()
    } else if (consoleState == ConsoleStates.VideoPlaying) {
        strip.setBrightness(100)
        strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
        strip.show()
    } else if (consoleState == ConsoleStates.YellowAlert) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        half.setBrightness(100)
        half.showColor(neopixel.colors(NeoPixelColors.Yellow))
        half.show()
        strip.rotate(1)
        circularLightTiming = 50
    } else if (consoleState == ConsoleStates.RedAlert) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        half.setBrightness(255)
        half.showColor(neopixel.colors(NeoPixelColors.Red))
        half.show()
        strip.rotate(1)
        circularLightTiming = 20
    } else {
        comment.comment("Should never have no state")
    }
    basic.pause(circularLightTiming)
})
