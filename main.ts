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

    RainbowSparkleUnicorn.comment("This controls the pressure gauge")
    if (control.millis() - previouspressureGaugeMillis > 1000) {
        previouspressureGaugeMillis = control.millis();
        pressureGauge();
    }

    RainbowSparkleUnicorn.comment("This loop controls the sounds")
    if (control.millis() - previousSoundControlMillis > 500) {
        previousSoundControlMillis = control.millis();
        soundControl();
    }

    RainbowSparkleUnicorn.comment("This loop controls the fuel gauge")
    if (control.millis() - previousFuelLightMillis > 200) {
        previousFuelLightMillis = control.millis();
        sortOutFuelLights();
    }

    RainbowSparkleUnicorn.comment("This loop controls the volume")
    if (control.millis() - previousvolumeControlMillis > 250) {
        previousvolumeControlMillis = control.millis();
        volumeControl();
    }

    RainbowSparkleUnicorn.comment("This loop controls the switch states")
    if (control.millis() - previousSwitchStatesMillis > 100) {
        previousSwitchStatesMillis = control.millis();
        RainbowSparkleUnicorn.Switch.getSwitchStates()
    }

    basic.pause(50);
})

