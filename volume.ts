// Add your code here
let volumeMapped = 0

function volumeControl() {
    let volume = 1023 - pins.analogReadPin(AnalogPin.P0);
    let tempVol = Math.round(Math.map(volume, 0, 1023, 0, 30));
    if (volumeMapped != tempVol) {
        volumeMapped = tempVol;
        music.setVolume(volumeMapped);
        serial.writeValue("vol", volumeMapped);
    }
}

// let slider = 0
// let volume = 0
// RainbowSparkleUnicorn.start()
// RainbowSparkleUnicorn.Controls.dial1(128)
// RainbowSparkleUnicorn.Controls.dial2(128)
// basic.forever(function () {
//     let volumeMapped = 0
//     volume = 1023 - pins.analogReadPin(AnalogPin.P0)
//     slider = pins.analogReadPin(AnalogPin.P2)
//     // led.plotBarGraph(
//     // slider,
//     // 1023
//     // )
//     serial.writeValue("v", volume)
//     // serial.writeValue("s", slider)
//     volumeMapped = Math.round(Math.map(volume, 0, 1023, 0, 30))
//     // basic.showNumber(volumeMapped)
//     serial.writeValue("vol", volumeMapped)
//     basic.pause(100);
// })
