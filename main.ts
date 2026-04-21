/* * Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Devon
 * Created on: Apr 2026
 * This program can drive a car and avoid a collision!
 */

// variables
let distance = 0

// setup
basic.showIcon(IconNames.Happy)

// button a
input.onButtonPressed(Button.A, function () {
    while (true) {
        // read distance sensor
        distance = sonar.ping(
            DigitalPin.P1,
            DigitalPin.P2,
            PingUnit.Centimeters
        )

        basic.showNumber(distance)
        basic.pause(100)

        if (distance < 10) {
            // Stop the car
            robotbit.StpCarMove(0, 0)
            basic.pause(500)

            // Reverse 10 cm
            robotbit.StpCarMove(-10, 48)
            basic.pause(1000)

            // Turn 90 degrees
            robotbit.StpCarTurn(90, 48, 125)
            basic.pause(1000)
        } else {
            // Otherwise move forward
            robotbit.StpCarMove(10, 48)
        }

        basic.showIcon(IconNames.Heart)
        basic.pause(100)
    }

})
