// RainbowSparkleUnicorn.IoT.sendMQTTMessage("spaceship-console/buttons", "Green Button")
RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.P10, function () {
    basic.showNumber(10)
})
// RainbowSparkleUnicorn.IoT.sendMQTTMessage("spaceship-console/alert", "Red Alert")
RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.P1, function () {
    consoleState = "RedAlert"
    basic.showNumber(1)
})
// RainbowSparkleUnicorn.IoT.sendMQTTMessage("spaceship-console/buttons", "Blue Button")
RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.P11, function () {
    basic.showNumber(11)
})
RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.P13, function () {
    basic.showNumber(13)
    sortOutFuelLights()
})

// RainbowSparkleUnicorn.IoT.sendMQTTMessage("spaceship-console/alert", "Normal")
RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.P0, function () {
    RainbowSparkleUnicorn.comment("Press red spinner to warp back to green")
    consoleState = "Normal"
    basic.showNumber(0)
})
RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.P8, function () {
    sortOutFuelLights()
})


// RainbowSparkleUnicorn.IoT.sendMQTTMessage("spaceship-console/alert", "Yellow Alert")
RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.P3, function () {
    RainbowSparkleUnicorn.comment("Press white spinner to warp back to yellow")
    consoleState = "YellowAlert"
    basic.showNumber(3)
})
// RainbowSparkleUnicorn.IoT.sendMQTTMessage("spaceship-console/buttons", "Red Button")
RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.P9, function () {
    basic.showNumber(9)
})