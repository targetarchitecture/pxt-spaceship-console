function start() {
    consoleState = "Starting"
    basic.showIcon(IconNames.Heart)
    RainbowSparkleUnicorn.start()
    RainbowSparkleUnicorn.Light.turnAllOn()
    RainbowSparkleUnicorn.Sound.stop()

    volumeControl();

    control.inBackground(() => {
        while (true) {
            volumeControl();
            basic.pause(250)
        }
    })

    RainbowSparkleUnicorn.Light.turnAllOff()
    control.inBackground(() => {
        while (true) {
            ringLights();
            basic.pause(20)
        }
    })

    RainbowSparkleUnicorn.Sound.playTrack(Math.randomRange(1, 2))

    RainbowSparkleUnicorn.Switch.RequestSwitchStates();

    control.inBackground(() => {
        while (true) {
            artificialHorizon();
            basic.pause(20)
        }
    })
    RainbowSparkleUnicorn.Light.turnOn(RainbowSparkleUnicorn.Light.Pins.P0)
    control.inBackground(() => {
        while (true) {
            pressureGauge();
            basic.pause(1000)
        }
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
    basic.showIcon(IconNames.SmallHeart)
    consoleState = "Normal"
}
let consoleState = ""
start()
