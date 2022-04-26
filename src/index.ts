/*
* This program is a vehicle class.
*
* @author  Abdul Basit 
* @version 1.0
* @since   2022-02-25
*/

import { Truck } from './Truck'
import { Bike } from './Bike'

const bmx = new Bike('Red', 40)

console.log('Created Bmx bike.\nStatus:\n')
bmx.status()

console.log('Set the cadense to 10\n')
bmx.cadense = 10
bmx.status()

console.log('\nAccelerate by 15:')
bmx.accelerate(15)
bmx.status()

console.log('\nRing bell.')
bmx.ringBell()

console.log('\nReturn number of tires:')
console.log(bmx.tireNum)

const bigTruck = new Truck('Grey', 200, 'HGC-3456F')

console.log('Created a Truck.\nStatus:\n')
bigTruck.status()

console.log('\nAccelerating, 10 of power for ten seconds:')
bigTruck.accelerate(10, 10)
console.log('New speed: ' + bigTruck.speed)

console.log('\nBreaking, 10 of power for 10 sec.')
bigTruck.accelerate(10, 10)
console.log('New speed: ' + bigTruck.speed)

console.log('\nApplyed air pressure of 10:')
bigTruck.applyAir(10)
console.log('New speed: ' + bigTruck.speed)

console.log('\nReturn number of tires:')
console.log(bigTruck.tireNum)

console.log('\nDone.')
