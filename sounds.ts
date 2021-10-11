// Add your code here

function soundControl() {

    let playingSound = RainbowSparkleUnicorn.Sound.playingSound();

    //serial.writeLine("playingSound:" + playingSound);
}

RainbowSparkleUnicorn.Sound.onBusyChange(function () {

    let notBusy = control.eventValue();

    serial.writeLine("onBusyChange:" + notBusy);  

    if (notBusy == 1) {
        RainbowSparkleUnicorn.Sound.playTrack(Math.randomRange(50, 52));
        basic.pause(500);
    }
})