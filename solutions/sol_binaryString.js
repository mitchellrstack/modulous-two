/*!
 * A simple but fast and accurate is even function
 * @author Mitchell Stack <mitchellrstack@gmail.com>
 */
const range = 1e6
const bin = '01'.repeat(range)

const isEven = n => bin[n + (range / 2)] === '0'

module.exports = isEven
