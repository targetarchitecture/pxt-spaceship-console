const horizonLevelAngle = 110;
const horizonServo = RainbowSparkleUnicorn.Movement.Pins.P8;

function artificialHorizon() {
        if (consoleState == "RedAlert") {
            RainbowSparkleUnicorn.comment("Timing in seconds")
            artificialHorizon_RedAlert();
        }
        else if (consoleState == "Starting") {
            artificialHorizon_Starting();
        } else {
            RainbowSparkleUnicorn.comment("Timing in seconds")
            artificialHorizon_Normal();
        }    
}

function artificialHorizon_RedAlert() {
    let horizonTiming = 10;
    RainbowSparkleUnicorn.Movement.moveServoBouncy(horizonServo, horizonLevelAngle - 50, horizonLevelAngle + 50, horizonTiming)
    basic.pause((horizonTiming * 1000) + 1000)
    RainbowSparkleUnicorn.Movement.moveServoBouncy(horizonServo, horizonLevelAngle + 50, horizonLevelAngle - 50, horizonTiming)
    basic.pause((horizonTiming * 1000) + 1000)
}

function artificialHorizon_Starting() {
    RainbowSparkleUnicorn.Movement.setServoAngle(horizonServo, horizonLevelAngle)
    basic.pause(500)
    RainbowSparkleUnicorn.Movement.moveServoLinear(horizonServo, horizonLevelAngle, horizonLevelAngle - 30, 2)
    basic.pause(2500)
}

function artificialHorizon_Normal() {
    let horizonTiming = 20;
    RainbowSparkleUnicorn.Movement.moveServoLinear(horizonServo, horizonLevelAngle - 30, horizonLevelAngle + 30, horizonTiming)
    basic.pause((horizonTiming * 1000) + 1000)
    RainbowSparkleUnicorn.Movement.moveServoLinear(horizonServo, horizonLevelAngle + 30, horizonLevelAngle - 30, horizonTiming)
    basic.pause((horizonTiming * 1000) + 1000)
}