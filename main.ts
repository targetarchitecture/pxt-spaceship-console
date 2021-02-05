RainbowSparkleUnicorn.Switch.onSwitchPressed(switchPins.P2, function () {
    consoleState = ConsoleStates.YellowAlert
RainbowSparkleUnicorn.Sound.playTrack(1)
})
input.onButtonPressed(Button.A, function () {
    consoleState = ConsoleStates.VideoPlaying
})
input.onButtonPressed(Button.B, function () {
    consoleState = ConsoleStates.Normal
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    consoleState = ConsoleStates.RedAlert
})
let circularLightLoopPauseMs = 0
enum ConsoleStates {Starting =0  , Normal=1, VideoPlaying=2, YellowAlert=3, RedAlert=4 }
let stateInCircularLightLoop = ConsoleStates.Starting
let consoleState = ConsoleStates.Starting
let strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
let alertStrip = strip.range(0, 10)
strip.setBrightness(255)
strip.showColor(neopixel.colors(NeoPixelColors.Green))
strip.show()
RainbowSparkleUnicorn.start()
RainbowSparkleUnicorn.printDebugMessages()
RainbowSparkleUnicorn.printReceivedMessages()
RainbowSparkleUnicorn.Light.turnAllOn()
RainbowSparkleUnicorn.Sound.setVolume(10)
RainbowSparkleUnicorn.Sound.playTrack(2)
let keyA = "qdDjMxAz"
let keyB = "LvQPRk6u"
RainbowSparkleUnicorn.IoT.connectToInterWeb(
"152 2.4GHz",
"derwenthorpe",
"targetarchitecture.cloud.shiftr.io",
"targetarchitecture",
"" + keyA + keyB,
"Spaceship Console"
)
consoleState = ConsoleStates.Normal
basic.forever(function () {
    comment.comment("This loop controls the circular lights")
    circularLightLoopPauseMs = 1000
    comment.comment("Need to check for a transition, so we can set up the lights")
    if (stateInCircularLightLoop != consoleState) {
        circularLightLoopPauseMs = 10
        if (consoleState == ConsoleStates.Normal) {
            strip.setBrightness(30)
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
            strip.show()
        } else if (consoleState == ConsoleStates.VideoPlaying) {
            strip.setBrightness(100)
            strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
            strip.show()
        } else if (consoleState == ConsoleStates.YellowAlert) {
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            alertStrip.setBrightness(100)
            alertStrip.showColor(neopixel.colors(NeoPixelColors.Yellow))
            alertStrip.show()
        } else if (consoleState == ConsoleStates.RedAlert) {
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            alertStrip.setBrightness(255)
            alertStrip.showColor(neopixel.colors(NeoPixelColors.Red))
            alertStrip.show()
        }
    } else {
        if (stateInCircularLightLoop == ConsoleStates.Starting) {
            comment.comment("Do nothing as green light setup in start block")
        } else if (stateInCircularLightLoop == ConsoleStates.Normal) {
            comment.comment("Do nothing as green light setup in transition")
        } else if (stateInCircularLightLoop == ConsoleStates.VideoPlaying) {
            comment.comment("Do nothing as video playing light setup in transition")
        } else if (stateInCircularLightLoop == ConsoleStates.YellowAlert) {
            comment.comment("Just spin the light and change loop speed by altering pause time")
            strip.rotate(1)
            strip.show()
            circularLightLoopPauseMs = 50
        } else if (stateInCircularLightLoop == ConsoleStates.RedAlert) {
            comment.comment("Just spin the light and change loop speed by altering pause time")
            strip.rotate(1)
            strip.show()
            circularLightLoopPauseMs = 20
        }
    }
    comment.comment("set the loop state to be the same as the console state as we have done the transition")
    stateInCircularLightLoop = consoleState
    comment.comment("pause for how long...")
    basic.pause(circularLightLoopPauseMs)
})
basic.forever(function () {
    comment.comment("This loop controls the gauge")
    if (consoleState == ConsoleStates.Normal) {
        RainbowSparkleUnicorn.Controls.dial1(randint(0, 30))
        basic.pause(1000)
    } else {
        RainbowSparkleUnicorn.Controls.dial1(0)
        basic.pause(2000)
    }
})
