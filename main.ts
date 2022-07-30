function start() {
    consoleState = "Starting";
  // const iconShowTime = 50;
    //let countdown = 20;
    initRingLights();
    // RainbowSparkleUnicorn.comment("ConsoleStates { Starting, Normal, VideoPlaying, YellowAlert, RedAlert }")
    // basic.showNumber(countdown--, iconShowTime)
    // RainbowSparkleUnicorn.comment("Back to UART")
    RainbowSparkleUnicorn.start()
    RainbowSparkleUnicorn.Light.turnAllOn()
    // basic.showNumber(countdown--, iconShowTime)
    RainbowSparkleUnicorn.Sound.stop()
    volumeControl();
     //basic.showNumber(countdown--, iconShowTime)
    RainbowSparkleUnicorn.Light.turnAllOff()
    control.inBackground(function () {
        ringLights();
    })
    // basic.showNumber(countdown--, iconShowTime)
    //RainbowSparkleUnicorn.comment("Opening sequence sound")
    RainbowSparkleUnicorn.Sound.playTrack(Math.randomRange(1, 2))
    RainbowSparkleUnicorn.Switch.RequestSwitchStates();
    control.inBackground(function () {
        artificialHorizon();
    })
    // basic.showNumber(countdown--, iconShowTime)
    // RainbowSparkleUnicorn.comment("This is the big red button")
    RainbowSparkleUnicorn.Light.turnOn(RainbowSparkleUnicorn.Light.Pins.P0)
    control.inBackground(function () {
        pressureGauge();
    })
    control.inBackground(function () {
        volumeControl();
    })
    // basic.showNumber(countdown--, iconShowTime)
    // RainbowSparkleUnicorn.comment("Make fuel lights look pretty")
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
    //basic.showIcon(IconNames.SmallSquare, iconShowTime)
    consoleState = "Normal"
}

let consoleState = ""
start()
