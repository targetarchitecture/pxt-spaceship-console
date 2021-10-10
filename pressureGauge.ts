// Add your code here

function pressureGauge() {

    if (consoleState == "Normal" || consoleState == "Starting") {
        RainbowSparkleUnicorn.comment("232 is 3v on to 0-255 scale (3.3v)")
        RainbowSparkleUnicorn.Controls.dial2(randint(0, 232))
    } else {
        RainbowSparkleUnicorn.Controls.dial2(0)
    }
}