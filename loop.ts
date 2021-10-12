let previousSwitchStatesMillis = 0
let previousvolumeControlMillis = 0
let previousFuelLightMillis = 0
let previousSoundControlMillis = 0
let previouspressureGaugeMillis = 0
let previouslastFreeBytesMillis=0

input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})

input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.SmallHeart)
})

basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the circular lights")
    ringLights();
})

basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the artificial horizon")

    //don't do anything until start has completed
    if (consoleState.compare("Starting") != 0) {
        artificialHorizon();
    } else {
        basic.pause(500);
    }
})

function loop() {

    RainbowSparkleUnicorn.comment("This is the main fixed timing loop")
    basic.forever(function () {

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

            RainbowSparkleUnicorn.comment("This loop controls the switch states")
            if (control.millis() - previousSwitchStatesMillis > 100) {
                previousSwitchStatesMillis = control.millis();
                RainbowSparkleUnicorn.Switch.getSwitchStates()
            }

            RainbowSparkleUnicorn.comment("This loop sends out debug info")
            if (control.millis() - previouslastFreeBytesMillis > 1000) {
                serial.writeValue("lastFreeBytes",    control.gcStats().lastFreeBytes);
                previouslastFreeBytesMillis = control.millis();
            }
        }

        //LED toggle takes two milliseconds
        led.toggle(0, 0);

        basic.pause(50);        
    })

}