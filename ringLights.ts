// Add your code here

function ringLights() {

    if (strip == null) {
        RainbowSparkleUnicorn.comment("Setup green lights")
        strip = neopixel.create(DigitalPin.P1, 24, NeoPixelMode.RGB)
        alertStripRight = strip.range(0, 6)
        alertStripLeft = strip.range(12, 6)
        strip.setBrightness(255)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        strip.show()
    }

    circularLightLoopPauseMs = 1000

    RainbowSparkleUnicorn.comment("Need to check for a transition, so we can set up the lights")
    
    if (stateInCircularLightLoop != consoleState) {
        circularLightLoopPauseMs = 10
        if (consoleState == "Normal") {
            strip.setBrightness(30)
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
            strip.show()
        } else if (consoleState == "VideoPlaying") {
            strip.setBrightness(100)
            strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
            strip.show()
        } else if (consoleState == "YellowAlert") {
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            alertStripRight.setBrightness(100)
            alertStripLeft.setBrightness(100)
            alertStripRight.showColor(neopixel.colors(NeoPixelColors.Yellow))
            alertStripLeft.showColor(neopixel.colors(NeoPixelColors.Yellow))
        } else if (consoleState == "RedAlert") {
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            alertStripRight.setBrightness(255)
            alertStripRight.setBrightness(255)
            alertStripRight.showColor(neopixel.colors(NeoPixelColors.Red))
            alertStripLeft.showColor(neopixel.colors(NeoPixelColors.Red))
        }
    } else {
        if (stateInCircularLightLoop == "Starting") {
            RainbowSparkleUnicorn.comment("Do nothing as green light setup in transition")
        } else if (stateInCircularLightLoop == "Normal") {
            RainbowSparkleUnicorn.comment("Do nothing as green light setup in transition")
        } else if (stateInCircularLightLoop == "VideoPlaying") {
            RainbowSparkleUnicorn.comment("Do nothing as video playing light setup in transition")
        } else if (stateInCircularLightLoop == "YellowAlert") {
            RainbowSparkleUnicorn.comment("Just spin the light and change loop speed by altering pause time")
            strip.rotate(1)
            strip.show()
            circularLightLoopPauseMs = 50
        } else if (stateInCircularLightLoop == "RedAlert") {
            RainbowSparkleUnicorn.comment("Just spin the light and change loop speed by altering pause time")
            strip.rotate(1)
            strip.show()
            circularLightLoopPauseMs = 20
        }
    }
    RainbowSparkleUnicorn.comment("set the loop state to be the same as the console state as we have done the transition")
    stateInCircularLightLoop = consoleState
    RainbowSparkleUnicorn.comment("pause for how long...")
    basic.pause(circularLightLoopPauseMs)

}