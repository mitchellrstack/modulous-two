/**
 * The simplest and fastest possible isEven function in JavaScript
 * @author Mitchell Stack <mitchellrstack@gmail.com>
 * @param  {Integer} n An Integer to determine if even
 * @return {Boolean}   Whether the integer was even or not
 */
const isEven = n => (n & 1) !== 1

module.exports = isEven
