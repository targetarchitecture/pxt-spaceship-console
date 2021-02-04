RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.P2, function () {
    RainbowSparkleUnicorn.Sound.playTrack(1)
})
input.onButtonPressed(Button.A, function () {
    rotateLEDs = 1
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    half.setBrightness(255)
    half.showColor(neopixel.colors(NeoPixelColors.Red))
    half.show()
})
input.onButtonPressed(Button.B, function () {
    rotateLEDs = 0
    strip.setBrightness(30)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    strip.show()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    rotateLEDs = 1
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    half.setBrightness(100)
    half.showColor(neopixel.colors(NeoPixelColors.Yellow))
    half.show()
})
let half: neopixel.Strip = null
let strip: neopixel.Strip = null
let rotateLEDs = 0
enum ConsoleStates {Starting, Normal, VideoPlaying, YellowAlert, RedAlert }
RainbowSparkleUnicorn.start()
RainbowSparkleUnicorn.printDebugMessages()
RainbowSparkleUnicorn.printReceivedMessages()
RainbowSparkleUnicorn.Light.turnAllOn()
RainbowSparkleUnicorn.Sound.setVolume(10)
RainbowSparkleUnicorn.Sound.playTrack(2)
rotateLEDs = 0
strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
half = strip.range(0, 10)
strip.setBrightness(100)
strip.showColor(neopixel.colors(NeoPixelColors.Green))
strip.show()
let consoleState = ConsoleStates.Starting;
basic.forever(function () {
    if (rotateLEDs == 1) {
        strip.rotate(1)
        strip.show()
        basic.pause(20)
    } else {
        basic.pause(1000)
    }
})
basic.forever(function () {
    RainbowSparkleUnicorn.Controls.dial1(randint(0, 30))
    basic.pause(2000)
})
