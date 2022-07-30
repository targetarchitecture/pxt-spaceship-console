
function pressureGauge() {
   // while (true) {
        if (consoleState == "Normal" || consoleState == "Starting") {
            //RainbowSparkleUnicorn.comment("232 is 3v on to 0-255 scale (3.3v)")
            RainbowSparkleUnicorn.Dial.value(RainbowSparkleUnicorn.Dial.Dials.Dial2, randint(0, 232))
        } else {
            RainbowSparkleUnicorn.Dial.value(RainbowSparkleUnicorn.Dial.Dials.Dial2, randint(128, 232))
        }
    //    basic.pause(1000)
    //}
}