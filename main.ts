let consoleState = "Starting"

input.onButtonPressed(Button.AB, function () {
    serial.redirectToUSB();
    basic.showIcon(IconNames.Yes)
})

function start() {

    RainbowSparkleUnicorn.comment("ConsoleStates { Starting, Normal, VideoPlaying, YellowAlert, RedAlert }");

    basic.showNumber(1)

    RainbowSparkleUnicorn.comment("Default i2c timing is 10 milliseconds");
    RainbowSparkleUnicorn.start(20);

    RainbowSparkleUnicorn.Sound.stop();
    volumeControl();

    basic.showNumber(2)

    RainbowSparkleUnicorn.Light.turnAllOff()

    basic.showNumber(3)

    RainbowSparkleUnicorn.comment("Opening sequence sound")
    RainbowSparkleUnicorn.Sound.playTrack(Math.randomRange(1, 2))

    basic.showNumber(4)

    //set artificial horizon
    basic.forever(function () {
        RainbowSparkleUnicorn.Movement.setServoAngle(horizonServo, horizonLevelAngle)
        basic.pause(500)
        RainbowSparkleUnicorn.Movement.moveServoLinear(horizonServo, horizonLevelAngle, horizonLevelAngle - 30, 2)
        basic.pause(2500)
    })

    RainbowSparkleUnicorn.comment("This is the big red button")
    RainbowSparkleUnicorn.Light.turnOn(P0)

    basic.showIcon(IconNames.Happy)

    consoleState = "Normal"

    //main code loop
    loops.everyInterval(50, function () {
        loop();
    })

    basic.forever(function () {
        RainbowSparkleUnicorn.comment("This loop controls the circular lights")
        ringLights();
    })

    basic.forever(function () {
        RainbowSparkleUnicorn.comment("This loop controls the artificial horizon")

        //don't do anything until start has completed
        if (consoleState.compare("Starting") != 0) {
            artificialHorizon();
        } else {
            basic.pause(500);
        }
    })



}


start();