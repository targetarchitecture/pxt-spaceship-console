// Add your code here

function soundControl() {

    let playingSound = RainbowSparkleUnicorn.Sound.playingSound();

    //serial.writeLine("playingSound:" + playingSound);
}

RainbowSparkleUnicorn.Sound.onBusyChange(function () {

    let busy = control.eventValue();

   // serial.writeLine("onBusyChange:" + busy);

    if (busy == 0) {
        RainbowSparkleUnicorn.Sound.playTrack(Math.randomRange(50, 52));
        basic.pause(500);
    }
})