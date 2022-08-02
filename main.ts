function start () {
    const showTime = 100;
    consoleState = "Starting"
    basic.showIcon(IconNames.Heart, showTime)
    RainbowSparkleUnicorn.start()
    basic.showIcon(IconNames.SmallHeart, showTime)
    RainbowSparkleUnicorn.Light.turnAllOn()
    basic.showIcon(IconNames.Heart, showTime)
    RainbowSparkleUnicorn.Sound.stop()
    basic.showIcon(IconNames.SmallHeart, showTime)
    control.inBackground(() => {
        while (true) {
            volumeControl();
            basic.pause(250)
        }
    })
    basic.showIcon(IconNames.Heart, showTime)
RainbowSparkleUnicorn.Light.turnAllOff()
    basic.showIcon(IconNames.SmallHeart, showTime)
    control.inBackground(() => {
        while (true) {
            ringLights();
            basic.pause(20)
        }
    })
    basic.showIcon(IconNames.Heart, showTime)
RainbowSparkleUnicorn.Sound.playTrack(Math.randomRange(1, 2))
    basic.showIcon(IconNames.SmallHeart, showTime)
    RainbowSparkleUnicorn.Switch.RequestSwitchStates();
    basic.showIcon(IconNames.Heart, showTime)
control.inBackground(() => {
        while (true) {
            artificialHorizon();
            basic.pause(20)
        }
    })
    basic.showIcon(IconNames.SmallHeart, showTime)
RainbowSparkleUnicorn.Light.turnOn(RainbowSparkleUnicorn.Light.Pins.P0)
    basic.showIcon(IconNames.Heart, showTime)
    control.inBackground(() => {
        while (true) {
            pressureGauge();
            basic.pause(1000)
        }
    })
    basic.showIcon(IconNames.SmallHeart, showTime)
RainbowSparkleUnicorn.Light.breathe(
    RainbowSparkleUnicorn.Light.Pins.P13,
    1000,
    500,
    250,
    250
    )
    RainbowSparkleUnicorn.Light.breathe(
    RainbowSparkleUnicorn.Light.Pins.P14,
    1000,
    500,
    250,
    250
    )
    basic.showIcon(IconNames.Happy)
    consoleState = "Normal"

}
let consoleState = ""
start();