let previousSwitchStatesMillis = 0
let previousvolumeControlMillis = 0
let previousFuelLightMillis = 0
let previousSoundControlMillis = 0
let previouspressureGaugeMillis = 0

input.onButtonPressed(Button.A, function() {    
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
    }
    //serial.writeLine("T2:" + control.millis())

    //LED toggle takes two milliseconds
    led.toggle(0, 0);

    //serial.writeLine("T3:" + control.millis())

    basic.pause(25);
})