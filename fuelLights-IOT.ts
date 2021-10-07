// Add your code here
let IoTConnected = false

function sortOutFuelLights() {
    
    if (IoTConnected == true) {
        // basic.clearScreen()
        RainbowSparkleUnicorn.Light.turnOff(lightPins.P13)
        RainbowSparkleUnicorn.Light.turnOff(lightPins.P14)
        if (RainbowSparkleUnicorn.Switch.getSwitchState(switchPins.P8) == "H") {
            RainbowSparkleUnicorn.Light.turnOn(lightPins.P13)
        }
        if (RainbowSparkleUnicorn.Switch.getSwitchState(switchPins.P13) == "H") {
            RainbowSparkleUnicorn.Light.turnOn(lightPins.P14)
        }
    } else {

        // Pink Right Light
        RainbowSparkleUnicorn.Light.turnOff(lightPins.P13)
        RainbowSparkleUnicorn.Light.blink(lightPins.P13, 500, 500)
        // Pink Left Light
        RainbowSparkleUnicorn.Light.turnOff(lightPins.P14)
        RainbowSparkleUnicorn.Light.blink(lightPins.P14, 500, 500)
        // RainbowSparkleUnicorn.IoT.connectToInterWeb(
        // "152 2.4GHz",
        // "derwenthorpe",
        // "robotmqtt",
        // "public",
        // "public",
        // "Spaceship Console"
        // )
        // RainbowSparkleUnicorn.IoT.startReceivingMessages("spaceship-console/rx")
        IoTConnected = true
        RainbowSparkleUnicorn.Light.turnOff(lightPins.P13)
        RainbowSparkleUnicorn.Light.turnOff(lightPins.P14)
    }
}

