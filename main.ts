
startUp();

basic.forever(function () {
    touchStatus = RainbowSparkleUnicorn.Touch.getTouchStates()
    switchStatus = RainbowSparkleUnicorn.Switch.getSwitchStates()
    basic.pause(50)
})
basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the circular lights")
    ringLights();
})
basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the volume")
    volumeControl();
    basic.pause(1000)
})
basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the artificial horizon")
    artificialHorizon();
})
basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the pressure gauge")
    pressureGauge();
})
basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the sounds")
    soundControl();
    RainbowSparkleUnicorn.comment("pause for how long...")
    basic.pause(1000)
})
basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the fuel gauge")
    sortOutFuelLights();
    RainbowSparkleUnicorn.comment("pause for how long...")
    basic.pause(500)
})
