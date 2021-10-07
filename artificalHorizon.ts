// Add your code here

let horizonLevelAngle = 110;

function artificialHorizon(){
    
    if (consoleState == "Starting") {
        RainbowSparkleUnicorn.Movement.setServoAngle(Servo.P8, horizonLevelAngle)
        basic.pause(500)
        RainbowSparkleUnicorn.Movement.moveServoLinear(Servo.P8, horizonLevelAngle, horizonLevelAngle - 30, 2)
        basic.pause(2500)
    } else if (consoleState == "Normal") {
        RainbowSparkleUnicorn.comment("Timing in seconds")
        horizonTiming = 20
        RainbowSparkleUnicorn.Movement.moveServoLinear(Servo.P8, horizonLevelAngle - 30, horizonLevelAngle + 30, horizonTiming)
        basic.pause(horizonTiming * 1000 + 1000)
        RainbowSparkleUnicorn.Movement.moveServoLinear(Servo.P8, horizonLevelAngle + 30, horizonLevelAngle - 30, horizonTiming)
        basic.pause(horizonTiming * 1000 + 1000)
    } else if (consoleState == "RedAlert") {
        RainbowSparkleUnicorn.comment("Timing in seconds")
        horizonTiming = 10
        RainbowSparkleUnicorn.Movement.moveServoBouncy(Servo.P8, horizonLevelAngle - 50, horizonLevelAngle + 50, horizonTiming)
        basic.pause(horizonTiming * 1000 + 1000)
        RainbowSparkleUnicorn.Movement.moveServoBouncy(Servo.P8, horizonLevelAngle + 50, horizonLevelAngle - 50, horizonTiming)
        basic.pause(horizonTiming * 1000 + 1000)
    } else {
        RainbowSparkleUnicorn.Movement.setServoAngle(Servo.P8, horizonLevelAngle)
        basic.pause(2000)
    }
}