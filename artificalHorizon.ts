// Add your code here

const horizonLevelAngle = 110;
const horizonServo = Servo.P7;
let horizonTiming = 0;

function artificialHorizon() {

    if (consoleState == "RedAlert") {
        RainbowSparkleUnicorn.comment("Timing in seconds")
        horizonTiming = 5
        RainbowSparkleUnicorn.Movement.moveServoBouncy(horizonServo, horizonLevelAngle - 50, horizonLevelAngle + 50, horizonTiming)
        basic.pause((horizonTiming * 1000) + 1000)
        RainbowSparkleUnicorn.Movement.moveServoBouncy(horizonServo, horizonLevelAngle + 50, horizonLevelAngle - 50, horizonTiming)
        basic.pause((horizonTiming * 1000) + 1000)
    } else {
        RainbowSparkleUnicorn.comment("Timing in seconds")
        horizonTiming = 20
        RainbowSparkleUnicorn.Movement.moveServoLinear(horizonServo, horizonLevelAngle - 30, horizonLevelAngle + 30, horizonTiming)
        basic.pause((horizonTiming * 1000) + 1000)
        RainbowSparkleUnicorn.Movement.moveServoLinear(horizonServo, horizonLevelAngle + 30, horizonLevelAngle - 30, horizonTiming)
        basic.pause((horizonTiming * 1000) + 1000)
    }
}