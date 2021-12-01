input.onButtonPressed(Button.A, function () {
    if (input.temperature() >= 25) {
        _.showColor(neopixel.colors(NeoPixelColors.Red))
        _.show()
    } else if (input.temperature() >= 20) {
        _.showColor(neopixel.colors(NeoPixelColors.Orange))
        _.show()
    } else if (input.temperature() >= 15) {
        _.showColor(neopixel.colors(NeoPixelColors.Yellow))
        _.show()
    } else if (input.temperature() >= 10) {
        _.showColor(neopixel.colors(NeoPixelColors.Green))
        _.show()
    } else if (input.temperature() >= 5) {
        _.showColor(neopixel.colors(NeoPixelColors.Blue))
        _.show()
    } else if (input.temperature() >= 0) {
        _.showColor(neopixel.colors(NeoPixelColors.Violet))
        _.show()
    } else if (input.temperature() >= -5) {
        _.showColor(neopixel.colors(NeoPixelColors.White))
        _.show()
    }
})
let temp = 0
let _: neopixel.Strip = null
OLED.init(128, 64)
OLED.clear()
OLED.writeStringNewLine("we print temperature")
_ = neopixel.create(DigitalPin.P2, 8, NeoPixelMode.RGB)
_.clear()
basic.forever(function () {
    temp = input.temperature()
    OLED.writeStringNewLine(convertToText(temp))
})
basic.forever(function () {
    if (input.temperature() >= 25) {
        pins.analogWritePin(AnalogPin.P1, 1023)
    }
})
