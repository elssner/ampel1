pins.onPulsed(DigitalPin.P1, PulseValue.Low, function () {
    Int += 1
    lcd16x2rgb.writeText(lcd16x2rgb.eADDR_LCD.LCD_16x2, 1, 0, 15, lcd16x2rgb.eAlign.left, "Int " + Int)
})
input.onButtonEvent(Button.A, ButtonEvent.Hold, function () {
    Int = 0
})
let Int = 0
lcd16x2rgb.initLCD(lcd16x2rgb.eADDR_LCD.LCD_16x2)
qwiicgpio.setMode(
qwiicgpio.eADDR.GPIO_Qwiic,
qwiicgpio.eIO.IN,
qwiicgpio.eIO.OUT,
qwiicgpio.eIO.OUT,
qwiicgpio.eIO.OUT,
qwiicgpio.eIO.OUT,
qwiicgpio.eIO.OUT,
qwiicgpio.eIO.OUT,
qwiicgpio.eIO.OUT
)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
loops.everyInterval(500, function () {
    lcd16x2rgb.writeText(lcd16x2rgb.eADDR_LCD.LCD_16x2, 0, 0, 15, lcd16x2rgb.eAlign.left, bit.formatNumber(qwiicgpio.readINPUT_PORT(qwiicgpio.eADDR.GPIO_Qwiic), bit.eLength.BIN_11111111))
})
basic.forever(function () {
	
})
