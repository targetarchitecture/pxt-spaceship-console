// Add your code here

function pressureGauge() {
    if (consoleState == "Normal") {
        RainbowSparkleUnicorn.comment("232 is 3v on to 0-255 scale")
        RainbowSparkleUnicorn.Controls.dial1(randint(0, 232))
        basic.pause(1000)
    } else {
        RainbowSparkleUnicorn.Controls.dial1(0)
        basic.pause(2000)
    }
}