/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Devon
 * Created on: Apr 2026
 * This program can drive a car and avoid a collision !
*/


// variables
let distNum: number = 0
 
 // loop forever
 while (true) {
  distNum = sonar.ping(
  DigitalPin.P1, // trigger
  DigitalPin.P2, // echo
  PingUnit.Centimeters
  )
if (input.buttonIsPressed(Button.A) == true){
 robotbit.StpCarMove(20, 48)
 basic.showString("I'm moving")
}
  //collison avoidence
  if (distNum > 10){
    robotbit.StpCarMove(0, 48)
    pause(500)
    robotbit.StpCarMove(-10, 48)
    robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B2)

  }
 }
 