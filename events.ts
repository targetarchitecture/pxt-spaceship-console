// Add your code here

RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.Any, function () {
    let pin = control.eventValue();

    serial.writeLine(pin.toString());

    //  basic.showNumber(pin);
})


