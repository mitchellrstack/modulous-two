/**
 * A Factory Module for the Modulous-Two Package
 * The proper use of this module would be to do something
 * similar to this:
 *
 * // example.js
 * const even = require('modulous-two')('simple')
 *
 * const test1 = even(2) // true
 * const test2 = even(3) // false
 * // end of example
 *
 * @author Mitchell Stack
 * @param  {String}   sol The name of the selected solution
 * @return {Function}     Return the isEven function requested
 */
const isEven = (sol) => {
  const solutions = [{
    name: 'simple',
    func: require('./solutions/sol_simple.js')
  }, {
    name: 'traditional',
    func: require('./solutions/sol_traditional.js')
  }, {
    name: 'binary-string',
    func: require('./solutions/sol_binaryString.js')
  }, {
    name: 'node-is-even',
    func: require('./solutions/mod_isEven.js')
  }, {
    name: 'node-big-integer',
    func: require('./solutions/mod_bigInteger.js')
  }, {
    name: 'regex',
    func: require('./solutions/sol_regex.js')
  }]

  // Returns an array of possible solutions by name
  const names = solutions.map((s) => s.name)

  // Gets the index of the name chosen from sol arg
  const solution = solutions[names.indexOf(sol)]

  // Return function
  let fn
  try {
    // Assign return function as requested
    fn = solution.func
  } catch (e) {
    // Default to simple solution if error
    fn = solutions[0].func
  }

  // For testing purposes, return available names
  if (sol === 'DEBUG') {
    return names
  }

  // Return the new function
  return fn
}

module.exports = isEven
