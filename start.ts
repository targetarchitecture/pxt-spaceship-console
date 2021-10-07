// Add your code here

let switchStatus = ""
let touchStatus = ""
let consoleState = ""
let sliderOrange = 0
let horizonTiming = 0

function startUp(){

    /**
 * enum ConsoleStates { Starting, Normal, VideoPlaying, YellowAlert, RedAlert }
 */

    consoleState = "Starting"
    basic.showNumber(1)
    RainbowSparkleUnicorn.start()
    basic.showNumber(2)
    RainbowSparkleUnicorn.Sound.setVolume(5)
    RainbowSparkleUnicorn.Sound.stop()
    RainbowSparkleUnicorn.Light.turnAllOff()
    // This is the big red button
    RainbowSparkleUnicorn.Light.turnOn(lightPins.P0)
    RainbowSparkleUnicorn.Movement.setServoAngle(Servo.P8, horizonLevelAngle)
    //soundControl();
    //ringLights();

    basic.showNumber(3)
    IoTConnected = false
    consoleState = "Normal"
    basic.showIcon(IconNames.Yes)

}