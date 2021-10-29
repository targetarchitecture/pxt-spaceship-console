
// RainbowSparkleUnicorn.Switch.on(RainbowSparkleUnicorn.Switch.Pins.P0, RainbowSparkleUnicorn.Switch.Event.pressed, function () {
//     dealWithButtonPress(RainbowSparkleUnicorn.Switch.Pins.P0);
// })
// RainbowSparkleUnicorn.Switch.on(RainbowSparkleUnicorn.Switch.Pins.P1, RainbowSparkleUnicorn.Switch.Event.pressed, function () {
//     dealWithButtonPress(RainbowSparkleUnicorn.Switch.Pins.P1);
// })
// RainbowSparkleUnicorn.Switch.on(RainbowSparkleUnicorn.Switch.Pins.P2, RainbowSparkleUnicorn.Switch.Event.pressed, function () {
//     dealWithButtonPress(RainbowSparkleUnicorn.Switch.Pins.P2);
// })
// RainbowSparkleUnicorn.Switch.on(RainbowSparkleUnicorn.Switch.Pins.P3, RainbowSparkleUnicorn.Switch.Event.pressed, function () {
//     dealWithButtonPress(RainbowSparkleUnicorn.Switch.Pins.P3);
// })
// RainbowSparkleUnicorn.Switch.on(RainbowSparkleUnicorn.Switch.Pins.P4, RainbowSparkleUnicorn.Switch.Event.pressed, function () {
//     dealWithButtonPress(RainbowSparkleUnicorn.Switch.Pins.P4);
// })
// RainbowSparkleUnicorn.Switch.on(RainbowSparkleUnicorn.Switch.Pins.P5, RainbowSparkleUnicorn.Switch.Event.pressed, function () {
//     dealWithButtonPress(RainbowSparkleUnicorn.Switch.Pins.P5);
// })
// RainbowSparkleUnicorn.Switch.on(RainbowSparkleUnicorn.Switch.Pins.P6, RainbowSparkleUnicorn.Switch.Event.pressed, function () {
//     dealWithButtonPress(RainbowSparkleUnicorn.Switch.Pins.P6);
// })
// RainbowSparkleUnicorn.Switch.on(RainbowSparkleUnicorn.Switch.Pins.P7, RainbowSparkleUnicorn.Switch.Event.pressed, function () {
//     dealWithButtonPress(RainbowSparkleUnicorn.Switch.Pins.P7);
// })
// RainbowSparkleUnicorn.Switch.on(RainbowSparkleUnicorn.Switch.Pins.P8, RainbowSparkleUnicorn.Switch.Event.pressed, function () {
//     dealWithButtonPress(RainbowSparkleUnicorn.Switch.Pins.P8);
// })
// RainbowSparkleUnicorn.Switch.on(RainbowSparkleUnicorn.Switch.Pins.P9, RainbowSparkleUnicorn.Switch.Event.pressed, function () {
//     dealWithButtonPress(RainbowSparkleUnicorn.Switch.Pins.P9);
// })
// RainbowSparkleUnicorn.Switch.on(RainbowSparkleUnicorn.Switch.Pins.P10, RainbowSparkleUnicorn.Switch.Event.pressed, function () {
//     dealWithButtonPress(RainbowSparkleUnicorn.Switch.Pins.P10);
// })
// RainbowSparkleUnicorn.Switch.on(RainbowSparkleUnicorn.Switch.Pins.P11, RainbowSparkleUnicorn.Switch.Event.pressed, function () {
//     dealWithButtonPress(RainbowSparkleUnicorn.Switch.Pins.P11);
// })
// RainbowSparkleUnicorn.Switch.on(RainbowSparkleUnicorn.Switch.Pins.P12, RainbowSparkleUnicorn.Switch.Event.pressed, function () {
//     dealWithButtonPress(RainbowSparkleUnicorn.Switch.Pins.P12);
// })
// RainbowSparkleUnicorn.Switch.on(RainbowSparkleUnicorn.Switch.Pins.P13, RainbowSparkleUnicorn.Switch.Event.pressed, function () {
//     dealWithButtonPress(RainbowSparkleUnicorn.Switch.Pins.P13);
// })
// RainbowSparkleUnicorn.Switch.on(RainbowSparkleUnicorn.Switch.Pins.P14, RainbowSparkleUnicorn.Switch.Event.pressed, function () {
//     dealWithButtonPress(RainbowSparkleUnicorn.Switch.Pins.P14);
// })
// RainbowSparkleUnicorn.Switch.on(RainbowSparkleUnicorn.Switch.Pins.P15, RainbowSparkleUnicorn.Switch.Event.pressed, function () {
//     dealWithButtonPress(RainbowSparkleUnicorn.Switch.Pins.P15);
// })

function dealWithButtonPress2(pin: number) {

    if (pin == null) {
        //serial.writeLine("switch pin value was null");
    } else {

       // serial.writeLine("switch pressed:" + pin);

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
        else if (pin ==7) {
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
        else if (pin ==15) {
            RainbowSparkleUnicorn.Sound.playTrack(21)
            setColour(neopixel.colors(NeoPixelColors.Blue));
        }
        else {
            //serial.writeLine("missing switch pin:" + pin);
        }
    }
}

