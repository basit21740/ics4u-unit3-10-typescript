/*
* This program is a vehicle class.
*
* @author  Abdul Basit
* @version 1.0
* @since   2022-02-25
*/

export abstract class Vehicle {
  // this is a  class.
  protected _speed: number
  protected _maxSpeed: number
  private _colour: string
  private _tireNum: number

  constructor (inicialColour: string, topspeed: number, inicialTire: number) {
    this._colour = inicialColour
    this._maxSpeed = topspeed
    this._tireNum = inicialTire
    this._speed = 0
  }

  public get speed () {
    // get speed
    return this._speed
  }
  
  public set speed (param: number) {
    // set speed
    this._speed = param
  }

  public get maxSpeed () {
    // get maxSpeed
    return this._maxSpeed
  }

  public get colour () {
    // get colour
    return this._colour
  } 

  public set colour (param: string) {
    // set colour
    this._colour = param
  }


  public get tireNum () {
    // get tireNum
    return this._tireNum
  }


  public status () {
    // Print status
    console.log('Speed: ' + this._speed + '\nMaxSpeed: ' + this._maxSpeed +
                    '\nColour: ' + this._colour)
  }

  public accelerate (accPow: number, accTime: number) {
    // Accelerate
    this._speed = (accPow * accTime) + this._speed
    if (this._speed > this._maxSpeed) {
      this._speed = this._maxSpeed
    }
  }

  public break (breakPow: number, breakTime: number) {
    // Break
    this._speed = this._speed - (breakPow * breakTime)
    if (this._speed < 0) {
      this._speed = 0
    }
  }
}
