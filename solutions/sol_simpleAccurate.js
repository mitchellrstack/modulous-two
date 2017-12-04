/**
 * Based on the simplest and fastest possible isEven function in JavaScript
 * but works with edge cases
 * @author Mitchell Stack <mitchellrstack@gmail.com>
 * @param  {Integer} n An Integer to determine if even
 * @return {Boolean}   Whether the integer was even or not
 */
//const isEven = n => typeof n === 'number' ? (n & 1) !== 1 : false
const isEven = n => typeof n === 'number' ? !(~~n & 1) : false

module.exports = isEven
