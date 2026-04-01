/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Devon
 * Created on: Apr 2026
 * This program can drive a car and avoid a colli !
*/


// setup
basic.showIcon(IconNames.Happy)
basic.clearScreen()

// forever loop
 while (true) {
    if (input.buttonIsPressed(Button.A) == true )
   robotbit.StpCarMove(10, 48)
 }

//
