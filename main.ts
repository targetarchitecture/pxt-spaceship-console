
let BB = "----------------"

startUp();

basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the volume")
    volumeControl();
    basic.pause(100)
})
basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the artificial horizon")
    artificialHorizon();
})
basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the pressure gauge")
    pressureGauge();
    basic.pause(1000)
})
basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the sounds")
    soundControl();
    basic.pause(1000)
})
basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the fuel gauge")
    sortOutFuelLights();
    basic.pause(500)
})
basic.forever(function () {

    let AA = RainbowSparkleUnicorn._readMessage("SUPDATE");

    if (AA.compare(BB)!=0  ) {
        serial.writeLine("switchStates:" + AA + " previousSwitchStates:" + BB);
    }

    // for (let index = 0; index < 16; index++) {

    //     const pinState = switchStates.charAt(index);
    //     const previousPinState = previousSwitchStates.charAt(index);

    //     if (pinState != previousPinState) {

    //         serial.writeLine("index: " + index + " pinState: " + pinState + " switchStates:" + switchStates + " previousPinState:" + previousPinState);

    //         //     if (pinState == "L") {
    //         //         control.raiseEvent(RAINBOW_SPARKLE_UNICORN_SWITCH_PRESSED, index + 1);
    //         //     } else if (pinState == "H") {
    //         //         control.raiseEvent(RAINBOW_SPARKLE_UNICORN_SWITCH_RELEASED, index + 1);
    //         //     }
    //     }
    // }

    BB = AA;
    //}


    // touchStatus = RainbowSparkleUnicorn.Touch.getTouchStates()
    //switchStatus = RainbowSparkleUnicorn.Switch.getSwitchStates()
    // serial.writeLine(switchStatus);
    basic.pause(250); //50
})
basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the circular lights")
    ringLights();
})
