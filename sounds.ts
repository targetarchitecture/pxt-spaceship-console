// Add your code here

function soundControl() {

    if (RainbowSparkleUnicorn.Sound.playingSound() == false) {
        RainbowSparkleUnicorn.Sound.playTrack(Math.randomRange(50, 52));
        basic.pause(500);
    }
}

