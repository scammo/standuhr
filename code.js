radio.onDataPacketReceived(({ receivedString: name, receivedNumber: value }) => {
    if (name == "uhr") {
        basic.showNumber(value)
        motors.motorPower(value)
    }
})
input.onButtonPressed(Button.A, () => {
    radio.sendValue("uhr", 100)
})
input.onButtonPressed(Button.B, () => {
    radio.sendValue("uhr", 0)
})
radio.setGroup(5)
basic.forever(() => {
    basic.pause(40000 + 200 * Math.random(1001))
    motors.motorPower(100)
    basic.pause(4 * Math.random(1001))
    motors.motorPower(0)
})

