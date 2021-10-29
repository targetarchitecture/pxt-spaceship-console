let consoleState = "Starting"

input.onButtonPressed(Button.AB, function () {
    serial.redirectToUSB();
    basic.showIcon(IconNames.Yes)
})

function start() {

    RainbowSparkleUnicorn.comment("ConsoleStates { Starting, Normal, VideoPlaying, YellowAlert, RedAlert }");

    basic.showNumber(1)

    RainbowSparkleUnicorn.comment("Default i2c timing is 10 milliseconds");
    RainbowSparkleUnicorn.start();

    RainbowSparkleUnicorn.Sound.stop();
    volumeControl();

    basic.showNumber(2)

    RainbowSparkleUnicorn.Light.turnAllOff()

    basic.forever(function () {
        RainbowSparkleUnicorn.comment("This loop controls the circular lights")
        ringLights();
    })

    basic.showNumber(3)

    RainbowSparkleUnicorn.comment("Opening sequence sound")
    RainbowSparkleUnicorn.Sound.playTrack(Math.randomRange(1, 2))

    basic.showNumber(4)

    //set artificial horizon
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

    RainbowSparkleUnicorn.comment("This is the big red button")
    RainbowSparkleUnicorn.Light.turnOn(P0)

    basic.showIcon(IconNames.Happy)

    consoleState = "Normal"

    //main code loops
    loops.everyInterval(1000, function () {
        RainbowSparkleUnicorn.comment("This controls the pressure gauge")
        pressureGauge();
    })

    loops.everyInterval(2000, function () {
        RainbowSparkleUnicorn.comment("This loop controls the sounds")
        soundControl();
    })

    loops.everyInterval(200, function () {
    RainbowSparkleUnicorn.comment("This loop controls the fuel gauge")
        sortOutFuelLights();
    })

    loops.everyInterval(250, function () {
    RainbowSparkleUnicorn.comment("This loop controls the volume")
        volumeControl();

        //LED toggle takes two milliseconds - just helps me!
        led.toggle(0, 0);
    })
}


start();