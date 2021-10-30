
RainbowSparkleUnicorn.Switch.onAnyPressed(function (pin) {
    dealWithButtonPress(pin);
})

function dealWithButtonPress(pin: number) {

        // serial.writeLine("switch pressed:" + pin);


    basic.showNumber(pin)

        if (pin == 1) {
            RainbowSparkleUnicorn.comment("Red Spinner")
            alertStripLeft.showRainbow()
            alertStripRight.showRainbow()
            RainbowSparkleUnicorn.Sound.playTrack(21)
        }
        else if (pin == 2) {
            RainbowSparkleUnicorn.comment("Red Alert")
            //prevents them pressing the button repeatedly!
            if (RainbowSparkleUnicorn.Sound.track() != 99) {
                consoleState = "RedAlert"
                RainbowSparkleUnicorn.Sound.playTrack(99)
                setColour(neopixel.colors(NeoPixelColors.Red));
            }
        }
        else if (pin == 3) {
            setColour(neopixel.colors(NeoPixelColors.White));
        }
        else if (pin == 4) {
            RainbowSparkleUnicorn.comment("White Spinner")
            RainbowSparkleUnicorn.Sound.playTrack(22)
            setColour(neopixel.colors(NeoPixelColors.Purple));
        }
        else if (pin == 5) {
            RainbowSparkleUnicorn.Sound.playTrack(Math.randomRange(81, 85));
            setColour(neopixel.colors(NeoPixelColors.Indigo));
        }
        else if (pin == 6) {
            setColour(neopixel.colors(NeoPixelColors.White));
            RainbowSparkleUnicorn.Sound.playTrack(Math.randomRange(81, 85));
        }
        else if (pin == 7) {
            setColour(neopixel.colors(NeoPixelColors.Indigo));
            RainbowSparkleUnicorn.Sound.playTrack(Math.randomRange(81, 85));
        }
        else if (pin == 8) {
            setColour(neopixel.colors(NeoPixelColors.Yellow));
            RainbowSparkleUnicorn.Sound.playTrack(Math.randomRange(81, 85));
        }
        else if (pin == 9) {
            sortOutFuelLights();
        }
        else if (pin == 10) {
            RainbowSparkleUnicorn.comment("Red Button")
            RainbowSparkleUnicorn.Sound.playTrack(70)
            setColour(neopixel.colors(NeoPixelColors.Red));
            consoleState = "RedAlert"
        }
        else if (pin == 11) {
            RainbowSparkleUnicorn.Sound.playTrack(20)
            setColour(neopixel.colors(NeoPixelColors.Green));
            consoleState = "Normal"
        }
        else if (pin == 12) {
            RainbowSparkleUnicorn.Sound.playTrack(23)
            setColour(neopixel.colors(NeoPixelColors.Blue));
            consoleState = "Normal";
        }
        else if (pin == 14) {
            sortOutFuelLights();
        }
        else if (pin == 15) {
            RainbowSparkleUnicorn.Sound.playTrack(21)
            setColour(neopixel.colors(NeoPixelColors.Blue));
        }
        else {
            //serial.writeLine("missing switch pin:" + pin);
        }
    
}

