
function sortOutFuelLights() {

    let LeftBtn = RainbowSparkleUnicorn.Switch.getSwitchState(switchPins.P7);
    let RightBtn = RainbowSparkleUnicorn.Switch.getSwitchState(switchPins.P12);

    if (LeftBtn == "L") {
        RainbowSparkleUnicorn.Light.turnOn(lightPins.P13)
        RainbowSparkleUnicorn.Light.turnOff(lightPins.P14)
    }

    if (RightBtn == "L") {
        RainbowSparkleUnicorn.Light.turnOn(lightPins.P14)
        RainbowSparkleUnicorn.Light.turnOff(lightPins.P13)
    }

    if (RightBtn == "H" && LeftBtn == "H") {
        RainbowSparkleUnicorn.Light.turnOff(lightPins.P13)
        RainbowSparkleUnicorn.Light.turnOff(lightPins.P14)
    }
}

