// Add your code here

const horizonLevelAngle = 110;
const horizonServo = RainbowSparkleUnicorn.Movement.Pins.P8;
let horizonTiming = 0;

function artificialHorizon() {
    while (true) {
    if (consoleState == "RedAlert") {
        RainbowSparkleUnicorn.comment("Timing in seconds")
        horizonTiming = 10
        RainbowSparkleUnicorn.Movement.moveServoBouncy(horizonServo, horizonLevelAngle - 50, horizonLevelAngle + 50, horizonTiming)
        basic.pause((horizonTiming * 1000) + 1000)
        RainbowSparkleUnicorn.Movement.moveServoBouncy(horizonServo, horizonLevelAngle + 50, horizonLevelAngle - 50, horizonTiming)
        basic.pause((horizonTiming * 1000) + 1000)
    }
    else if (consoleState == "Starting") {
        RainbowSparkleUnicorn.Movement.setServoAngle(horizonServo, horizonLevelAngle)
        basic.pause(500)
        RainbowSparkleUnicorn.Movement.moveServoLinear(horizonServo, horizonLevelAngle, horizonLevelAngle - 30, 2)
        basic.pause(2500)
    } else {
        RainbowSparkleUnicorn.comment("Timing in seconds")
        horizonTiming = 20
        RainbowSparkleUnicorn.Movement.moveServoLinear(horizonServo, horizonLevelAngle - 30, horizonLevelAngle + 30, horizonTiming)
        basic.pause((horizonTiming * 1000) + 1000)
        RainbowSparkleUnicorn.Movement.moveServoLinear(horizonServo, horizonLevelAngle + 30, horizonLevelAngle - 30, horizonTiming)
        basic.pause((horizonTiming * 1000) + 1000)
    }
}}