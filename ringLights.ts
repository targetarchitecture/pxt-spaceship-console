
let alertStripLeft: neopixel.Strip = null
let alertStripRight: neopixel.Strip = null
let strip: neopixel.Strip = null

function ringLights() {

        initRingLights();

        if (consoleState != "Starting") {

            alertStripLeft.rotate(1);
            alertStripRight.rotate(1);
            strip.show();

            let shields = pins.analogReadPin(AnalogPin.P2);

            basic.pause(shields);

        } else {
            basic.pause(500);
        }
}

function setColour(rgb: number) {

    initRingLights();

    alertStripLeft.showColor(rgb)
    alertStripRight.showColor(rgb)
    alertStripLeft.setPixelColor(0, NeoPixelColors.Black)
    alertStripRight.setPixelColor(0, NeoPixelColors.Black)
    alertStripLeft.setPixelColor(1, NeoPixelColors.Black)
    alertStripRight.setPixelColor(1, NeoPixelColors.Black)
}

function initRingLights() {

    if (strip == null) {
        //RainbowSparkleUnicorn.comment("Setup starting rainbow")
        strip = neopixel.create(DigitalPin.P1, 24, NeoPixelMode.RGB)
        alertStripRight = strip.range(0, 6)
        alertStripLeft = strip.range(12, 6)
        strip.setBrightness(255)
        alertStripRight.showRainbow()
        alertStripLeft.showRainbow()
    }

}