class ParkingSystem {
  constructor(big, medium, small) {
    this.spaces = [null, big, medium, small]
  }

  /**
   *
   * @param {number} carType
   * @return {boolean}
   * @complexities Time => O(1) | Space => O(1)
   */
  addCar(carType) {
    if (this.spaces[carType]) {
      this.spaces[carType]--
      return true
    }
    return false
  }
}

let object = new ParkingSystem(1, 1, 0)
console.log(object.addCar(1))
console.log(object.addCar(2))
console.log(object.addCar(3))
console.log(object.addCar(1))
