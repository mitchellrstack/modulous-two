/**
 * Converts the number into a string after dividing and
 * if there is a period, it is odd
 * @author Mitchell Stack <mitchellrstack@gmail.com>
 * @param  {Number} n A number to determine if even
 * @return {Boolean}  Whether the number was even or not
 */
const isEven = n => (n / 2).toString().indexOf('.') === -1

module.exports = isEven
