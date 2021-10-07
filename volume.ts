// Add your code here

function volumeControl(){
    sliderOrange = RainbowSparkleUnicorn.Controls.Slider1()
    // setVolumes()
    serial.writeValue("sliderOrange", sliderOrange)
    // RainbowSparkleUnicorn.Sound.setVolume(Math.map(100 - sliderOrange, 0, 100, 0, 30))
    // music.setVolume(Math.map(sliderOrange, 0, 100, 0, 255))

    
}