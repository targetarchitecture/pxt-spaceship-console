let previousSwitchStatesMillis = 0
let previousvolumeControlMillis = 0
let previousFuelLightMillis = 0
let previousSoundControlMillis = 0
let previouspressureGaugeMillis = 0
let previouslastFreeBytesMillis = 0

function loop() {

    RainbowSparkleUnicorn.comment("This is the main fixed timing loop")

    //don't do anything until start has completed
    if (consoleState.compare("Starting") != 0) {

        RainbowSparkleUnicorn.comment("This controls the pressure gauge")
        if (control.millis() - previouspressureGaugeMillis > 1000) {
            previouspressureGaugeMillis = control.millis();
            pressureGauge();
        }

        RainbowSparkleUnicorn.comment("This loop controls the sounds")
        if (control.millis() - previousSoundControlMillis > 2000) {
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
    }

    //LED toggle takes two milliseconds
    led.toggle(0, 0);
}