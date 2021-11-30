
// RainbowSparkleUnicorn.Switch.onAnyPressed(function (pin) {    
//     //dealWithButtonPress(pin);
//     basic.showNumber(pin);
// })

const btnBottomLatching = RainbowSparkleUnicorn.Switch.Pins.P8;
const btnRedAlert = RainbowSparkleUnicorn.Switch.Pins.P1;
const btnWarp = RainbowSparkleUnicorn.Switch.Pins.P0;
const btnImpulse = RainbowSparkleUnicorn.Switch.Pins.P3;
 const btnFuelLeft = RainbowSparkleUnicorn.Switch.Pins.P14;
 const btnFuelRight = RainbowSparkleUnicorn.Switch.Pins.P13;
const btnActionRed = RainbowSparkleUnicorn.Switch.Pins.P9;
const btnActionBlue = RainbowSparkleUnicorn.Switch.Pins.P11;
const btnActionGreen = RainbowSparkleUnicorn.Switch.Pins.P10;
const joystickRight = RainbowSparkleUnicorn.Switch.Pins.P5;
const joystickLeft = RainbowSparkleUnicorn.Switch.Pins.P6;

RainbowSparkleUnicorn.Switch.onPressed(btnRedAlert, function () {
    RainbowSparkleUnicorn.comment("Red Alert")

    //prevents them pressing the button repeatedly!
    if (RainbowSparkleUnicorn.Sound.track() != 99) {
        consoleState = "RedAlert"
        RainbowSparkleUnicorn.Sound.playTrack(99)
        setColour(neopixel.colors(NeoPixelColors.Red));
    }
})

RainbowSparkleUnicorn.Switch.onPressed(btnWarp, function () {
    RainbowSparkleUnicorn.comment("Red Spinner")
    alertStripLeft.showRainbow()
    alertStripRight.showRainbow()
    RainbowSparkleUnicorn.Sound.playTrack(21)
})

RainbowSparkleUnicorn.Switch.onPressed(btnImpulse, function () {
    RainbowSparkleUnicorn.comment("White Spinner")
    RainbowSparkleUnicorn.Sound.playTrack(22)
    setColour(neopixel.colors(NeoPixelColors.Purple));
})

RainbowSparkleUnicorn.Switch.onPressed(joystickLeft, function () {
    RainbowSparkleUnicorn.Sound.playTrack(Math.randomRange(81, 85));
    setColour(neopixel.colors(NeoPixelColors.Indigo));
})

RainbowSparkleUnicorn.Switch.onPressed(joystickRight, function () {
    RainbowSparkleUnicorn.Sound.playTrack(Math.randomRange(81, 85));
    setColour(neopixel.colors(NeoPixelColors.Yellow));
})

RainbowSparkleUnicorn.Switch.onPressed(btnActionRed, function () {
    RainbowSparkleUnicorn.comment("Red Button")
    RainbowSparkleUnicorn.Sound.playTrack(70)
    setColour(neopixel.colors(NeoPixelColors.Red));
    consoleState = "RedAlert"
})

RainbowSparkleUnicorn.Switch.onPressed(btnActionGreen, function () {
    RainbowSparkleUnicorn.Sound.playTrack(20)
    setColour(neopixel.colors(NeoPixelColors.Green));
    consoleState = "Normal"
})

RainbowSparkleUnicorn.Switch.onPressed(btnActionBlue, function () {
    RainbowSparkleUnicorn.Sound.playTrack(23)
    setColour(neopixel.colors(NeoPixelColors.Blue));
    consoleState = "Normal";
})

RainbowSparkleUnicorn.Switch.onPressed(btnBottomLatching, function () {
    RainbowSparkleUnicorn.Sound.playTrack(21)
    setColour(neopixel.colors(NeoPixelColors.Blue));
    consoleState = "Normal";
})

RainbowSparkleUnicorn.Switch.onPressed(btnWarp, function () {
    RainbowSparkleUnicorn.comment("Red Spinner")
    alertStripLeft.showRainbow()
    alertStripRight.showRainbow()
    RainbowSparkleUnicorn.Sound.playTrack(21)
})


function dealWithButtonPress(pin: number) {



    // else if (pin == 9) {
    //     sortOutFuelLights();
    // }

    // else if (pin == 14) {
    //     sortOutFuelLights();
    // }
    // else if (pin == 15) {
    //     RainbowSparkleUnicorn.Sound.playTrack(21)
    //     setColour(neopixel.colors(NeoPixelColors.Blue));
    // }
    // else {
    //     //serial.writeLine("missing switch pin:" + pin);
    // }

}

