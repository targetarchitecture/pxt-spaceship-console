// function soundControl() {
//     let playingSound = RainbowSparkleUnicorn.Sound.playingSound();
// }

RainbowSparkleUnicorn.Sound.onBusyChange(function (busy) {

    if (busy == false) {
        //basic.pause(500);
        RainbowSparkleUnicorn.Sound.playTrack(Math.randomRange(50, 52));
        basic.pause(500);
    }
})