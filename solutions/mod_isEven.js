const iseven = require('is-even')

const isEven = n => {
  try {
    return iseven(n)
  } catch (e) {
    return false
  }
}

module.exports = isEven
