


function sortOutFuelLights() {

    let LeftBtn = RainbowSparkleUnicorn.Switch.getSwitchState(btnFuelLeft);
    let RightBtn = RainbowSparkleUnicorn.Switch.getSwitchState(btnFuelRight);

    if (LeftBtn == "L") {
        RainbowSparkleUnicorn.Light.turnOn(RainbowSparkleUnicorn.Light.Pins.P13)
        RainbowSparkleUnicorn.Light.turnOff(RainbowSparkleUnicorn.Light.Pins.P14)
    }

    if (RightBtn == "L") {
        RainbowSparkleUnicorn.Light.turnOn(RainbowSparkleUnicorn.Light.Pins.P14)
        RainbowSparkleUnicorn.Light.turnOff(RainbowSparkleUnicorn.Light.Pins.P13)
    }

    if (RightBtn == "H" && LeftBtn == "H") {
        RainbowSparkleUnicorn.Light.turnOff(RainbowSparkleUnicorn.Light.Pins.P13)
        RainbowSparkleUnicorn.Light.turnOff(RainbowSparkleUnicorn.Light.Pins.P14)
    }
}