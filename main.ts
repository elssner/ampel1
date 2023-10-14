pins.onPulsed(DigitalPin.P1, PulseValue.Low, function () {
    Int += 1
    lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), 1, 0, 15, "Int " + Int)
})
input.onButtonEvent(Button.A, ButtonEvent.Hold, function () {
    Int = 0
})
let Int = 0
lcd16x2rgb.initLCD(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2))
qwiicgpio.setMode(
qwiicgpio.qwiicgpio_eADDR(qwiicgpio.eADDR.GPIO_x27),
qwiicgpio.eIO.IN,
qwiicgpio.eIO.IN_inverted,
qwiicgpio.eIO.IN,
qwiicgpio.eIO.IN,
qwiicgpio.eIO.IN,
qwiicgpio.eIO.IN,
qwiicgpio.eIO.IN,
qwiicgpio.eIO.IN
)
loops.everyInterval(500, function () {
    lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), 0, 0, 15, bit.formatNumber(qwiicgpio.readINPUT_PORT(qwiicgpio.qwiicgpio_eADDR(qwiicgpio.eADDR.GPIO_x27)), bit.eLength.BIN_11111111))
})
