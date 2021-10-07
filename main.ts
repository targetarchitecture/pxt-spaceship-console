



let horizonTiming = 0
let sliderOrange = 0
let circularLightLoopPauseMs = 0
let alertStripLeft: neopixel.Strip = null
let alertStripRight: neopixel.Strip = null
let strip: neopixel.Strip = null
let switchStatus = ""
let touchStatus = ""
let IoTConnected = false
let consoleState = "Starting"
// enum ConsoleStates { Starting, Normal, VideoPlaying, YellowAlert, RedAlert }
let stateInCircularLightLoop = ""
let stateInCircularSoundLoop = ""
basic.showNumber(1)
RainbowSparkleUnicorn.start()
basic.showNumber(2)
RainbowSparkleUnicorn.Sound.setVolume(5)
RainbowSparkleUnicorn.Sound.stop();

RainbowSparkleUnicorn.Light.turnAllOff();
// This is the big red button
RainbowSparkleUnicorn.Light.turnOn(lightPins.P0)
RainbowSparkleUnicorn.Movement.setServoAngle(Servo.P8, horizonLevelAngle)

soundControl();
//music.setBuiltInSpeakerEnabled(true)

basic.showNumber(3)
IoTConnected = false
consoleState = "Normal"
basic.showIcon(IconNames.Yes)

basic.forever(function () {
    touchStatus = RainbowSparkleUnicorn.Touch.getTouchStates()
    switchStatus = RainbowSparkleUnicorn.Switch.getSwitchStates()
    basic.pause(50)
})
basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the circular lights")
    ringLights();
})
basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the volume")
    volumeControl();
    basic.pause(1000)
})
basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the artificial horizon")
    artificialHorizon();
})
basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the pressure gauge")
    pressureGauge();
})
basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the sounds")
    soundControl();
    RainbowSparkleUnicorn.comment("pause for how long...")
    basic.pause(1000)
})

basic.forever(function () {
    RainbowSparkleUnicorn.comment("This loop controls the fuel gauge")
    sortOutFuelLights();
    RainbowSparkleUnicorn.comment("pause for how long...")
    basic.pause(500)
})