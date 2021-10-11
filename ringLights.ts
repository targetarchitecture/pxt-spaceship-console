// Add your code here

let circularLightLoopPauseMs = 1000
let alertStripLeft: neopixel.Strip = null
let alertStripRight: neopixel.Strip = null
let strip: neopixel.Strip = null
let stateInCircularLightLoop = ""

function ringLights() {

    if (strip == null) {

        RainbowSparkleUnicorn.comment("Setup starting rainbow")
        strip = neopixel.create(DigitalPin.P1, 24, NeoPixelMode.RGB)
        alertStripRight = strip.range(0, 6)
        alertStripLeft = strip.range(12, 6)
        strip.setBrightness(255)

        alertStripRight.showRainbow();
        alertStripLeft.showRainbow();
    }

    alertStripLeft.rotate(1);
    alertStripRight.rotate(1);
    strip.show();

    let shields = pins.analogReadPin(AnalogPin.P2);
    //let sheildsMap = Math.round(Math.map(shields, 20, 985, 50, 1000));

    //serial.writeValue("shields", shields);
    //serial.writeValue("sheildsMap", sheildsMap);

    basic.pause(shields);

    //basic.pause(250);
}

function setColour(rgb: number) {

    alertStripLeft.showColor(rgb)
    alertStripRight.showColor(rgb)
    alertStripLeft.setPixelColor(0, NeoPixelColors.Black)
    alertStripRight.setPixelColor(0, NeoPixelColors.Black)
    alertStripLeft.setPixelColor(1, NeoPixelColors.Black)
    alertStripRight.setPixelColor(1, NeoPixelColors.Black)
}