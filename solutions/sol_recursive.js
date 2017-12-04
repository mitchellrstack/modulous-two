const isEven = (n) => {
  if (n === 0) {
    return true
  } else if (n > 0) {
    return isOdd(n - 1)
  } else {
    return isOdd(n + 1)
  }
}

const isOdd = (n) => {
  if (n === 0) {
    return false
  } else if (n > 0) {
    return isEven(n - 1)
  } else {
    return isEven(n + 1)
  }
}

module.exports = isEven
