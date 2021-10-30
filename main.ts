
//problems are that the volume and the spinner speed are using the analog pins...

function start() {
    RainbowSparkleUnicorn.comment("ConsoleStates { Starting, Normal, VideoPlaying, YellowAlert, RedAlert }")
    basic.showNumber(0)
    RainbowSparkleUnicorn.comment("Back to UART")
    RainbowSparkleUnicorn.start(
    );
    RainbowSparkleUnicorn.Light.turnAllOn()
    basic.showNumber(1)
    RainbowSparkleUnicorn.Sound.stop()
    volumeControl();
    basic.showNumber(2)
    RainbowSparkleUnicorn.Light.turnAllOff()
    basic.showNumber(3)

    if (strip == null) {

        RainbowSparkleUnicorn.comment("Setup starting rainbow")
        strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
        alertStripRight = strip.range(0, 6)
        alertStripLeft = strip.range(12, 6)
        strip.setBrightness(255)

        alertStripRight.showRainbow();
        alertStripLeft.showRainbow();
    }

    basic.forever(function () {
        RainbowSparkleUnicorn.comment("This loop controls the circular lights")
        ringLights();
    })

    basic.showNumber(4)
    RainbowSparkleUnicorn.comment("Opening sequence sound")
    RainbowSparkleUnicorn.Sound.playTrack(Math.randomRange(1, 2))
    basic.showNumber(5)

    //get the starting switch states
    RainbowSparkleUnicorn.Switch.RequestSwitchStates();

    basic.forever(function () {
        RainbowSparkleUnicorn.comment("This loop controls the artificial horizon")

        //don't do anything until start has completed
        if (consoleState.compare("Starting") != 0) {
            artificialHorizon();
        } else {
            RainbowSparkleUnicorn.Movement.setServoAngle(horizonServo, horizonLevelAngle)
            basic.pause(500)
            RainbowSparkleUnicorn.Movement.moveServoLinear(horizonServo, horizonLevelAngle, horizonLevelAngle - 30, 2)
            basic.pause(2500)
        }
    })
    basic.showNumber(6)
    RainbowSparkleUnicorn.comment("This is the big red button")
    RainbowSparkleUnicorn.Light.turnOn(RainbowSparkleUnicorn.Light.Pins.P0)
    basic.showIcon(IconNames.Surprised)
    consoleState = "Normal"

    loops.everyInterval(1000, function () {
        RainbowSparkleUnicorn.comment("This controls the pressure gauge")
        pressureGauge();
    })

    loops.everyInterval(500, function () {
        RainbowSparkleUnicorn.comment("This loop controls the fuel gauge")
        sortOutFuelLights();
    })

    loops.everyInterval(250, function () {
        RainbowSparkleUnicorn.comment("This loop controls the volume")
        volumeControl();
    })
    
    basic.showIcon(IconNames.Happy)
}
let consoleState = "Starting"
start()
