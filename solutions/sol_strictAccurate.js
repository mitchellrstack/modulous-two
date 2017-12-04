
const isEven = n => {
  // Deal with empty string
  if (n === '') {
    return false
  }

  // Deal with null
  if (n === null) {
    return false
  }

  // Deal with Arrays
  if (Array.isArray(n)) {
    return false
  }

  // Convert n to Number (may set to NaN)
  n = Number(n)

  // Deal with NaN
  if (isNaN(n)) {
    return false
  }

  // Deal with infinity
  if (n === Number.NEGATIVE_INFINITY || n === Number.POSITIVE_INFINITY) {
    return false
  }

  return n === 0 || !!(n && !(n % 2))
}

module.exports = isEven
