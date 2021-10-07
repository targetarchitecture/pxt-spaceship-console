// Add your code here

function soundControl() {

    serial.writeLine("stateInCircularSoundLoop:" + stateInCircularSoundLoop + " consoleState:" + consoleState)

    if (stateInCircularSoundLoop != consoleState) {
        if (consoleState == "Normal") {
            RainbowSparkleUnicorn.Sound.playTrack(2)
        } else if (consoleState == "VideoPlaying") {
            RainbowSparkleUnicorn.Sound.pause()
        } else if (consoleState == "YellowAlert") {
            RainbowSparkleUnicorn.Sound.playTrack(3)
        } else if (consoleState == "RedAlert") {
            RainbowSparkleUnicorn.Sound.playTrack(4)
        } else if (consoleState == "Starting") {
            RainbowSparkleUnicorn.Sound.playTrack(1)

            basic.showIcon(IconNames.Heart)
            while (true){
                basic.pause(1000);

                serial.writeLine("playingSound:" +  RainbowSparkleUnicorn.Sound.playingSound());

                if (RainbowSparkleUnicorn.Sound.playingSound() == false) {
                    break;
                }                
            }
           // basic.pause(24000)
            basic.showIcon(IconNames.Asleep)
        }
    } else {
        if (stateInCircularSoundLoop == "Starting") {
            RainbowSparkleUnicorn.comment("Do nothing")
        } else if (stateInCircularSoundLoop == "Normal") {
            RainbowSparkleUnicorn.comment("Do nothing")
        } else if (stateInCircularSoundLoop == "VideoPlaying") {
            RainbowSparkleUnicorn.comment("Do nothing")
        } else if (stateInCircularSoundLoop == "YellowAlert") {
            RainbowSparkleUnicorn.comment("Do nothing")
        } else if (stateInCircularSoundLoop == "RedAlert") {
            RainbowSparkleUnicorn.comment("Check to see if the track is playing, once stopped then reduce to yellow alert")
            if (RainbowSparkleUnicorn.Sound.playingSound() == false) {
                consoleState = "YellowAlert"
            }
        }
    }
    RainbowSparkleUnicorn.comment("set the loop state to be the same as the console state as we have done the transition")
    stateInCircularSoundLoop = consoleState

}