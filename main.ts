startUp();

let previouspressureGaugeMillis = 0;
let previousSoundControlMillis = 0;
let previousFuelLightMillis = 0;
let previousvolumeControlMillis = 0;
let previousSwitchStatesMillis = 0;

basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the artificial horizon")
    artificialHorizon();
})

basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the circular lights")
    ringLights();
})

RainbowSparkleUnicorn.comment("This is the main fixed timing loop")
basic.forever(function () {

    let currentMillis = control.millis()

    RainbowSparkleUnicorn.comment("This controls the pressure gauge")
    if (currentMillis - previouspressureGaugeMillis > 1000) {
        previouspressureGaugeMillis = currentMillis;
        pressureGauge();
    }

    //currentMillis = control.millis()

    RainbowSparkleUnicorn.comment("This loop controls the sounds")
    if (currentMillis - previousSoundControlMillis > 500) {
        previousSoundControlMillis = currentMillis;
        soundControl();
    }

    //currentMillis = control.millis()

    RainbowSparkleUnicorn.comment("This loop controls the fuel gauge")
    if (currentMillis - previousFuelLightMillis > 200) {
        previousFuelLightMillis = currentMillis;
        sortOutFuelLights();
    }

    RainbowSparkleUnicorn.comment("This loop controls the volume")
    if (currentMillis - previousvolumeControlMillis > 250) {
        previousvolumeControlMillis = currentMillis;
        volumeControl();
    }

    //currentMillis = control.millis()

    RainbowSparkleUnicorn.comment("This loop controls the switch states")
    if (currentMillis - previousSwitchStatesMillis > 100) {
        previousSwitchStatesMillis = currentMillis;
        RainbowSparkleUnicorn.Switch.getSwitchStates()
    }

    basic.pause(50);
})

