/*
* This program is a Truck class.
*
* @author  Abdul Basit
* @version 1.0
* @since   2022-02-02
*/

import { Vehicle } from './Vehicle'

export class Truck extends Vehicle {
  // This is a truck class.
  private _licensePlate: string

  constructor (inicialColour: string, topspeed: number,
    inicialPlate: string) {
    super(inicialColour, topspeed, 6)
    this._licensePlate = inicialPlate
  }

  public get licensePlate () {
    // get licensePlate
    return this._licensePlate
  }

  public set licensePlate (param: string) {
    // set licensePlate
    this._licensePlate = param
  }

  public applyAir (airPressure: number) {
    // Applies air to break
    this.speed = this.speed - airPressure / 2
  }

  public status () {
    // Print status.
    super.status()
    console.log('License plate: ' + this._licensePlate)
  }
}
