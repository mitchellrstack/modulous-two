/**
 * Converts a large number to a string and then evaluates
 * if the last number is even or not
 * @param  {Number} n A Number to be determined if even
 * @return {Boolean}  If the Number was even
 */
const isEven = n => {
  try {
    let str = n.toString()

    str = str[str.length - 1]

    return !(~~str & 1)
  } catch (e) {
    return false
  }
}

module.exports = isEven
