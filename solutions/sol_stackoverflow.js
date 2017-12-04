const request = require('request')
const cheerio = require('cheerio')

// URL on StackOverflow with isEven answers
const stackoverflow = 'https://stackoverflow.com/questions/6211613/testing-whether-a-value-is-odd-or-even'

/**
 * Refers to StackOverflow for whether a Number is even
 * @param  {Function} n) Number to determine if even
 * @return {Boolean}     Whether the number was even or not
 */
const isEven = (n) => new Promise((resolve, reject) => {
  // Make a request to StackOverflow
  request(stackoverflow, (err, res, body) => {
    if (err) reject(err)

    // Load the HTML body into cheerio
    const $ = cheerio.load(body)

    // Select the code with the correct answer
    const code = $('code', '#answer-6211660').first().html()

    // Evaluate the return value of running the script
    const run = eval(`${code};\n isEven(${n});`)

    // Resolve the promise with the returned value
    resolve(run)
  })
})

// Export the module for external testing/use
module.exports = isEven
