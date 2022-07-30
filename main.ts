function start() {
    consoleState = "Starting";

    RainbowSparkleUnicorn.start()

    RainbowSparkleUnicorn.Light.turnAllOn()
    RainbowSparkleUnicorn.Sound.stop()

    loops.everyInterval(250, function () {
        volumeControl();
    });

    RainbowSparkleUnicorn.Light.turnAllOff()

    basic.forever(function () {
        ringLights();
    })

    RainbowSparkleUnicorn.Sound.playTrack(Math.randomRange(1, 2))
    RainbowSparkleUnicorn.Switch.RequestSwitchStates();

    basic.forever(function () {
        artificialHorizon();
    })

    RainbowSparkleUnicorn.Light.turnOn(RainbowSparkleUnicorn.Light.Pins.P0)

    loops.everyInterval(1000, function () {
        pressureGauge();
    });

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
