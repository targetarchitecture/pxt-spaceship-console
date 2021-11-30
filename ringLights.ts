
//let circularLightLoopPauseMs = 1000
let alertStripLeft: neopixel.Strip = null
let alertStripRight: neopixel.Strip = null
let strip: neopixel.Strip = null

function ringLights() {

    alertStripLeft.rotate(1);
    alertStripRight.rotate(1);
    strip.show();

    let shields = pins.analogReadPin(AnalogPin.P2);

    basic.pause(shields);

    //basic.pause(500);
}

function setColour(rgb: number) {

    alertStripLeft.showColor(rgb)
    alertStripRight.showColor(rgb)
    alertStripLeft.setPixelColor(0, NeoPixelColors.Black)
    alertStripRight.setPixelColor(0, NeoPixelColors.Black)
    alertStripLeft.setPixelColor(1, NeoPixelColors.Black)
    alertStripRight.setPixelColor(1, NeoPixelColors.Black)
}