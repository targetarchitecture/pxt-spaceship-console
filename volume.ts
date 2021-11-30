// Add your code here
let volumeMapped = -1

function volumeControl() {
    let volume = 1023 - pins.analogReadPin(AnalogPin.P0);
    //let volume = 1023;
    let tempVol = Math.round(Math.map(volume, 0, 1023, 0, 30));
    if (volumeMapped != tempVol) {
        volumeMapped = tempVol;
        RainbowSparkleUnicorn.Sound.setVolume(volumeMapped);
    }
}

