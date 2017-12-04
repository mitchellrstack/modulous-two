const bigInt = require('big-integer')

const isEven = n => {
  try {
    return bigInt(n).isEven()
  } catch (e) {
    return false
  }
}

module.exports = isEven
