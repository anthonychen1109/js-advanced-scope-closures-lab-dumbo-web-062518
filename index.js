const produceDrivingRange = blockRange => {
  return function(a,b) {
    distance = Math.abs(parseInt(a)-parseInt(b))
    if (distance > blockRange) {
      return `${Math.abs(blockRange - distance)} blocks out of range`
    } else {
      return `within range by ${Math.abs(blockRange - distance)}`
    }
  }
}

const produceTipCalculator = tip => {
  return function(dollars) {
    return tip * dollars
  }
}

const createDriver = name => {
  let driverId = 0

  return class {
    constructor(name) {
      this.name = name
      this.id = ++ driverId
    }
  }

}
