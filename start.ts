// Add your code here


let consoleState = ""

function startUp() {

    RainbowSparkleUnicorn.comment("ConsoleStates { Starting, Normal, VideoPlaying, YellowAlert, RedAlert }");

    consoleState = "Starting"
    basic.showNumber(1)
    RainbowSparkleUnicorn.start()
    basic.showNumber(2)

    RainbowSparkleUnicorn.Sound.stop();
    volumeControl();

    RainbowSparkleUnicorn.Light.turnAllOff()
    RainbowSparkleUnicorn.Movement.setServoAngle(Servo.P8, horizonLevelAngle)

    RainbowSparkleUnicorn.comment("This is the big red button")
    RainbowSparkleUnicorn.Light.turnOn(lightPins.P0)

    RainbowSparkleUnicorn.comment("the runInParallel command allows us to delay switching the console state to Normal and letting the multiple loops work")
    control.runInParallel(function () {

        basic.showNumber(3)

        RainbowSparkleUnicorn.comment("Opening sequence sound")
        RainbowSparkleUnicorn.Sound.playTrack(Math.randomRange(1,2))

        basic.showNumber(4)

        consoleState = "Normal"
        basic.showIcon(IconNames.Yes)
    })
}