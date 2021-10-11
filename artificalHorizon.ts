// Add your code here

let horizonLevelAngle = 110;
let horizonTiming = 0;

function artificialHorizon() {

    if (consoleState == "RedAlert") {
        RainbowSparkleUnicorn.comment("Timing in seconds")
        horizonTiming = 5
        RainbowSparkleUnicorn.Movement.moveServoBouncy(Servo.P8, horizonLevelAngle - 50, horizonLevelAngle + 50, horizonTiming)
        basic.pause((horizonTiming * 1000) + 1000)
        RainbowSparkleUnicorn.Movement.moveServoBouncy(Servo.P8, horizonLevelAngle + 50, horizonLevelAngle - 50, horizonTiming)
        basic.pause((horizonTiming * 1000) + 1000)
    } else {
        RainbowSparkleUnicorn.comment("Timing in seconds")
        horizonTiming = 20
        RainbowSparkleUnicorn.Movement.moveServoLinear(Servo.P8, horizonLevelAngle - 30, horizonLevelAngle + 30, horizonTiming)
        basic.pause((horizonTiming * 1000) + 1000)
        RainbowSparkleUnicorn.Movement.moveServoLinear(Servo.P8, horizonLevelAngle + 30, horizonLevelAngle - 30, horizonTiming)
        basic.pause((horizonTiming * 1000) + 1000)
    }
}