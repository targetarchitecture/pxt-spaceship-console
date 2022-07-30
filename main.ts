function start() {
    consoleState = "Starting";

    RainbowSparkleUnicorn.start()
    RainbowSparkleUnicorn.Light.turnAllOn()
    RainbowSparkleUnicorn.Sound.stop()
    volumeControl();
    RainbowSparkleUnicorn.Light.turnAllOff()
    control.inBackground(function () {
        ringLights();
    })
    RainbowSparkleUnicorn.Sound.playTrack(Math.randomRange(1, 2))
    RainbowSparkleUnicorn.Switch.RequestSwitchStates();
    control.inBackground(function () {
        artificialHorizon();
    })
    RainbowSparkleUnicorn.Light.turnOn(RainbowSparkleUnicorn.Light.Pins.P0)
    control.inBackground(function () {
        pressureGauge();
    })
    control.inBackground(function () {
        volumeControl();
    })
    RainbowSparkleUnicorn.Light.breathe(
        RainbowSparkleUnicorn.Light.Pins.P13,
        1000,
        500,
        250,
        250
    )
    RainbowSparkleUnicorn.Light.breathe(
        RainbowSparkleUnicorn.Light.Pins.P14,
        1000,
        500,
        250,
        250
    )
    consoleState = "Normal"
}

let consoleState = ""
start()
