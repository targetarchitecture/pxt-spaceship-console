
// RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.P0, function () {
//     RainbowSparkleUnicorn.comment("Press red spinner to warp back to green")
//     alertStripLeft.showRainbow()
//     alertStripRight.showRainbow()
//     RainbowSparkleUnicorn.Sound.playTrack(21)
// })

// RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.P1, function () {
//     consoleState = "RedAlert"
//     RainbowSparkleUnicorn.Sound.playTrack(99)
//     setColour(neopixel.colors(NeoPixelColors.Red));
// })

// RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.P2, function () {
//         setColour(neopixel.colors(NeoPixelColors.Orange));
//         basic.showNumber(2)
// })

// RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.P3, function () {
//     RainbowSparkleUnicorn.comment("Press white spinner to warp back to yellow")
// })

// RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.P10, function () {
//     RainbowSparkleUnicorn.Sound.playTrack(20)
//     setColour(neopixel.colors(NeoPixelColors.Green));
//     consoleState = "Normal"
// })

// RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.P11, function () {
//     RainbowSparkleUnicorn.Sound.playTrack(21)
//     setColour(neopixel.colors(NeoPixelColors.Blue));
// })

// RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.P9, function () {
//     RainbowSparkleUnicorn.Sound.playTrack(70)
// })


RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.Any, function () {

    let pin = control.eventValue();

    //basic.showNumber(pin);

    if (pin == switchPins.P0) {
        RainbowSparkleUnicorn.comment("Press red spinner to warp back to green")
        alertStripLeft.showRainbow()
        alertStripRight.showRainbow()
        RainbowSparkleUnicorn.Sound.playTrack(21)
    }
    else if (pin == switchPins.P1) {

        //prevents them pressing the button repeatedly!
        if (RainbowSparkleUnicorn.Sound.track() != 99) {
            consoleState = "RedAlert"
            RainbowSparkleUnicorn.Sound.playTrack(99)
            setColour(neopixel.colors(NeoPixelColors.Red));
        }
    }
    else if (pin == switchPins.P2) {
        setColour(neopixel.colors(NeoPixelColors.Orange));
    }
    else if (pin == switchPins.P3) {
        setColour(neopixel.colors(NeoPixelColors.Purple));
    }
    else if (pin == switchPins.P4) {
        setColour(neopixel.colors(NeoPixelColors.Indigo));
    }
    else if (pin == switchPins.P5) {
        setColour(neopixel.colors(NeoPixelColors.White));
    }
    else if (pin == switchPins.P6) {
        setColour(neopixel.colors(NeoPixelColors.Black));
    }
    else if (pin == switchPins.P7) {
        setColour(neopixel.colors(NeoPixelColors.Violet));
    } else if (pin == switchPins.P8) {
        setColour(neopixel.colors(NeoPixelColors.Yellow));
    } else if (pin == switchPins.P9) {
        RainbowSparkleUnicorn.Sound.playTrack(70)
    } else if (pin == switchPins.P10) {
        RainbowSparkleUnicorn.Sound.playTrack(20)
        setColour(neopixel.colors(NeoPixelColors.Green));
        consoleState = "Normal"
    } else if (pin == switchPins.P11) {
        setColour(neopixel.colors(NeoPixelColors.Yellow));
    }
    else if (pin == switchPins.P12) {
        RainbowSparkleUnicorn.Sound.playTrack(21)
        setColour(neopixel.colors(NeoPixelColors.Blue));
    }
    else if (pin == switchPins.P13) {
        sortOutFuelLights();
    } else if (pin == switchPins.P14) {
        sortOutFuelLights();
    } else if (pin == switchPins.P15) {
        setColour(neopixel.colors(NeoPixelColors.Blue));
    }

})