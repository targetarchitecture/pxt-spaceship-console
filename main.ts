startUp();

basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the volume")
    volumeControl();
    basic.pause(250)
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
    RainbowSparkleUnicorn.Switch.getSwitchStates()
    basic.pause(100)
})
basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the fuel gauge")
    sortOutFuelLights();
    basic.pause(500)
})
basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the circular lights")
    ringLights();
})
