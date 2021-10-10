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
        basic.pause(5000)

        basic.showNumber(3)

        consoleState = "Normal"
        basic.showIcon(IconNames.Yes)
    })
}