
let fuelbuttonsSet = false;

RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.Any, function () {

    let pin = control.eventValue();

    serial.writeLine("switch pressed:" + pin)

    if (pin == switchPins.P0) {
        RainbowSparkleUnicorn.comment("Red Spinner")
        alertStripLeft.showRainbow()
        alertStripRight.showRainbow()
        RainbowSparkleUnicorn.Sound.playTrack(21)
    }
    else if (pin == switchPins.P1) {
        RainbowSparkleUnicorn.comment("Red Alert")
        //prevents them pressing the button repeatedly!
        if (RainbowSparkleUnicorn.Sound.track() != 99) {
            consoleState = "RedAlert"
            RainbowSparkleUnicorn.Sound.playTrack(99)
            setColour(neopixel.colors(NeoPixelColors.Red));
        }
    }
    else if (pin == switchPins.P2) {
        setColour(neopixel.colors(NeoPixelColors.White));
    }
    else if (pin == switchPins.P3) {
        RainbowSparkleUnicorn.comment("White Spinner")
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
        setColour(neopixel.colors(NeoPixelColors.Yellow));
    }
    else if (pin == switchPins.P9) {
        RainbowSparkleUnicorn.comment("Red Button")
        RainbowSparkleUnicorn.Sound.playTrack(70)
        setColour(neopixel.colors(NeoPixelColors.Red));
        consoleState = "RedAlert"
    }
    else if (pin == switchPins.P10) {
        RainbowSparkleUnicorn.Sound.playTrack(20)
        setColour(neopixel.colors(NeoPixelColors.Green));
        consoleState = "Normal"
    }
    // else if (pin == switchPins.P11) {
    //     RainbowSparkleUnicorn.Sound.playTrack(21)
    //     setColour(neopixel.colors(NeoPixelColors.Blue));
    // }
    else if (pin == switchPins.P12) {
        RainbowSparkleUnicorn.Sound.playTrack(10)
        setColour(neopixel.colors(NeoPixelColors.Blue));
        consoleState = "Normal"
    }
    // else if (pin == switchPins.P8 || pin == switchPins.P13) {

    //     //this prevents the button from firing on the first event handler
    //     if (fuelbuttonsSet == true) {
    //         RainbowSparkleUnicorn.Sound.playTrack(23)
    //     }

    //     fuelbuttonsSet = true;
    // } 
    else if (pin == switchPins.P14) {
        RainbowSparkleUnicorn.Sound.playTrack(21)
        setColour(neopixel.colors(NeoPixelColors.Blue));
    }
    else {
        serial.writeLine("missing switch pin:" + pin);
    }

})