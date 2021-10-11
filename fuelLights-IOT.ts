// Add your code here
let IoTConnected = false

function sortOutFuelLights() {

    // basic.clearScreen()
    RainbowSparkleUnicorn.Light.turnOff(lightPins.P13)
    RainbowSparkleUnicorn.Light.turnOff(lightPins.P14)

    let switch8 = RainbowSparkleUnicorn.Switch.getSwitchState(switchPins.P7);
    let switch13 = RainbowSparkleUnicorn.Switch.getSwitchState(switchPins.P12);

    //serial.writeLine("8=" + switch8);
   // serial.writeLine("13=" + switch13);

    // if (RainbowSparkleUnicorn.Switch.getSwitchState(switchPins.P8) == "H") {
    //     RainbowSparkleUnicorn.Light.turnOn(lightPins.P13)
    // }

    // if (RainbowSparkleUnicorn.Switch.getSwitchState(switchPins.P13) == "H") {
    //     RainbowSparkleUnicorn.Light.turnOn(lightPins.P14)
    // }

}

