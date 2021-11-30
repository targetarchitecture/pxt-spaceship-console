// function soundControl() {
//     let playingSound = RainbowSparkleUnicorn.Sound.playingSound();
// }

// RainbowSparkleUnicorn.Sound.onStopStart(function (busy) {
//     if (busy == false) {
//         //basic.pause(500);
//         RainbowSparkleUnicorn.Sound.playTrack(Math.randomRange(50, 52));
//         basic.pause(500);
//     }
// })

RainbowSparkleUnicorn.Sound.onStop(function () {
    basic.pause(500);
    RainbowSparkleUnicorn.Sound.playTrack(Math.randomRange(50, 52));
    basic.pause(500);
})