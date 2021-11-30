


function sortOutFuelLights( ) {

    let LeftBtn = RainbowSparkleUnicorn.Switch.getSwitchState(btnFuelLeft);
    let RightBtn = RainbowSparkleUnicorn.Switch.getSwitchState(btnFuelRight);
 
    if (LeftBtn == RainbowSparkleUnicorn.Switch.Event.Pressed) {
        RainbowSparkleUnicorn.Light.turnOn(RainbowSparkleUnicorn.Light.Pins.P13)
        RainbowSparkleUnicorn.Light.turnOff(RainbowSparkleUnicorn.Light.Pins.P14)
    }

    if (RightBtn == RainbowSparkleUnicorn.Switch.Event.Pressed) {
        RainbowSparkleUnicorn.Light.turnOn(RainbowSparkleUnicorn.Light.Pins.P14)
        RainbowSparkleUnicorn.Light.turnOff(RainbowSparkleUnicorn.Light.Pins.P13)
    }

    if (RightBtn == RainbowSparkleUnicorn.Switch.Event.Released && LeftBtn == RainbowSparkleUnicorn.Switch.Event.Released) {
        RainbowSparkleUnicorn.Light.turnOff(RainbowSparkleUnicorn.Light.Pins.P13)
        RainbowSparkleUnicorn.Light.turnOff(RainbowSparkleUnicorn.Light.Pins.P14)
    }
} 