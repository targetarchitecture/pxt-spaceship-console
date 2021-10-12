let consoleState = ""

function startUp() {

    RainbowSparkleUnicorn.comment("ConsoleStates { Starting, Normal, VideoPlaying, YellowAlert, RedAlert }");

    consoleState = "Starting"
    basic.showNumber(1)
    RainbowSparkleUnicorn.start();

    RainbowSparkleUnicorn.Sound.stop();
    volumeControl();

    basic.showNumber(2)

    RainbowSparkleUnicorn.Light.turnAllOff()

    basic.showNumber(3)

    RainbowSparkleUnicorn.comment("Opening sequence sound")
    RainbowSparkleUnicorn.Sound.playTrack(Math.randomRange(1, 2))

    basic.showNumber(4)

    //set artificial horizon
    control.runInParallel(function () {
        RainbowSparkleUnicorn.Movement.setServoAngle(horizonServo, horizonLevelAngle)
        basic.pause(500)
        RainbowSparkleUnicorn.Movement.moveServoLinear(horizonServo, horizonLevelAngle, horizonLevelAngle - 30, 2)
        basic.pause(2500)
    })

    RainbowSparkleUnicorn.comment("This is the big red button")
    RainbowSparkleUnicorn.Light.turnOn(lightPins.P0)

    basic.showIcon(IconNames.Happy)

    consoleState = "Normal"
}