function start() {
    consoleState = "Starting"
    iconShowTime = 50
    countdown = 10
    RainbowSparkleUnicorn.comment("Start ring lights")
    basic.showNumber(countdown--, iconShowTime)
    initRingLights();
    RainbowSparkleUnicorn.comment("ConsoleStates { Starting, Normal, VideoPlaying, YellowAlert, RedAlert }")
    basic.showNumber(countdown--, iconShowTime)
    RainbowSparkleUnicorn.comment("Back to UART")
    RainbowSparkleUnicorn.start()
    RainbowSparkleUnicorn.Light.turnAllOn()
    basic.showNumber(countdown--, iconShowTime)
    RainbowSparkleUnicorn.Sound.stop()
    volumeControl();
    basic.showNumber(countdown--, iconShowTime)
    RainbowSparkleUnicorn.Light.turnAllOff()
    basic.showNumber(countdown--, iconShowTime)

    // basic.forever(function () {
    //     RainbowSparkleUnicorn.comment("This loop controls the circular lights")
    //     if (consoleState.compare("Starting") != 0) {
    //         ringLights();
    //     }
    // })

    control.inBackground(function () {
        ringLights();
    })

    basic.showNumber(countdown--, iconShowTime)
    RainbowSparkleUnicorn.comment("Opening sequence sound")
    RainbowSparkleUnicorn.Sound.playTrack(Math.randomRange(1, 2))
    basic.showNumber(countdown--, iconShowTime)
    RainbowSparkleUnicorn.Switch.RequestSwitchStates();

    // basic.forever(function () {
    //     RainbowSparkleUnicorn.comment("This loop controls the artificial horizon")
    //     artificialHorizon();
    // })

    basic.showNumber(countdown--, iconShowTime)
    RainbowSparkleUnicorn.comment("This is the big red button")
    RainbowSparkleUnicorn.Light.turnOn(RainbowSparkleUnicorn.Light.Pins.P0)
    basic.showNumber(countdown--, iconShowTime)

    // loops.everyInterval(1000, function () {
    //     RainbowSparkleUnicorn.comment("This controls the pressure gauge")
    //     pressureGauge();
    // })

    control.inBackground(function () {
        pressureGauge();
    })

    basic.showNumber(countdown--, iconShowTime)

    // loops.everyInterval(250, function () {
    //     RainbowSparkleUnicorn.comment("This loop controls the volume")
    //     volumeControl();
    // })

    control.inBackground(function () {
        volumeControl();
    })

    basic.showNumber(countdown--, iconShowTime)

    RainbowSparkleUnicorn.comment("Make fuel lights look pretty")
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
    basic.showIcon(IconNames.SmallSquare, iconShowTime)
    consoleState = "Normal"
}
let countdown = 0
let iconShowTime = 0
let consoleState = ""
start()

