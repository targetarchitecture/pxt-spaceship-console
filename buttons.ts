
RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.P0, function () {
    RainbowSparkleUnicorn.comment("Press red spinner to warp back to green")
    alertStripLeft.showRainbow()
    alertStripRight.showRainbow()
    RainbowSparkleUnicorn.Sound.playTrack(21)
})

RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.P1, function () {
    consoleState = "RedAlert"
    RainbowSparkleUnicorn.Sound.playTrack(99)
    setColour(neopixel.colors(NeoPixelColors.Red));
})

RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.P2, function () {
        setColour(neopixel.colors(NeoPixelColors.Orange));
        basic.showNumber(2)
})


RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.P3, function () {
    RainbowSparkleUnicorn.comment("Press white spinner to warp back to yellow")
})

RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.P10, function () {
    RainbowSparkleUnicorn.Sound.playTrack(20)
    setColour(neopixel.colors(NeoPixelColors.Green));
    consoleState = "Normal"
})



RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.P11, function () {
    RainbowSparkleUnicorn.Sound.playTrack(21)
    setColour(neopixel.colors(NeoPixelColors.Blue));
})






RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.P9, function () {
    RainbowSparkleUnicorn.Sound.playTrack(70)

})


// RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.Any, function () {
//     basic.showNumber(control.eventValue());
// })