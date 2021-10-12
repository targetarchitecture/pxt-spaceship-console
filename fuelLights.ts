
function sortOutFuelLights() {

    let P7 = RainbowSparkleUnicorn.Switch.getSwitchState(switchPins.P7);
    let P12 = RainbowSparkleUnicorn.Switch.getSwitchState(switchPins.P12);

    if (P7 == "L") {
        RainbowSparkleUnicorn.Light.turnOn(lightPins.P13)
        RainbowSparkleUnicorn.Light.turnOff(lightPins.P14)
    }

    if (P12 == "L") {
        RainbowSparkleUnicorn.Light.turnOn(lightPins.P14)
        RainbowSparkleUnicorn.Light.turnOff(lightPins.P13)
    }

    if (P12 == "H" && P7 == "H") {
        RainbowSparkleUnicorn.Light.turnOff(lightPins.P13)
        RainbowSparkleUnicorn.Light.turnOff(lightPins.P14)
    }
}

