<h1 align="center">
  <img src="https://cdn.rawgit.com/mitchellrstack/modulous-two/master/sticker.png" alt="Modulous-Two" width="200">
  <br>
  Modulous-Two
  <br>
  <br>
</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/modulous-two"><img src="https://img.shields.io/npm/v/modulous-two.svg" alt="npm version"></a>
  <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide"></a>
</p>

<h4 align="center">Useless module with poorly written tests. isEven. JavaScript</h4>

## Getting Started

```
npm install --save modulous-two
```
```JavaScript
const isEven = require('modulous-two')('simple')

const test1 = isEven(2) // true
const test2 = isEven(3) // false
```

### Motivation

I got motivation to do this quick project because of all of the solutions that [r/ProgrammerHumor](https://www.reddit.com/r/ProgrammerHumor/) had for determining if a number is even or odd. So I came up with as many solutions as I could to try to find the fastest possible solution to this problem in JavaScript. Test results are posted below for those interested in the numbers behind each test and which modules performed best.

I wanted to go a bit further than the traditional format:
```JavaScript
// traditional.js
function isEven(number) {
  return number % 2 === 0
}
```

I have tested the fastest, as well as the most accurate solutions to the problem. The fastest solution is what I call 'simple' and it looks like this:
```JavaScript
const isEven = n => !(~~n & 1)
```
This solution, however, is only accurate with numbers and fails all edges cases that were defined

### Prerequisites

- NodeJS

### Installing

Here are the steps to get you started in exploring this useless module:

Start by installing it via Npm:
```
npm install --save modulous-two
```
Or via Yarn:
```
yarn add modulous-two
```
Then in your JavaScript file, require the factory like so:
```JavaScript
// Require the factory to select module to use
const modTwo = require('modulous-two')

const isEven = modTwo('simple')

console.log(isEven(2)) // true
console.log(isEven(3)) // false
```

## Contributing

```
TODO
Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.
```

## Contributors

TODO

See the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## TODO

* Publish to yarn?
* Create contributing.md to allow others to submit their solutions
* Lint, clean up, and improve all current solutions
* Add results of tests to README or maybe RESULTS.md

## Future

In the future, I plan on maybe creating these solutions in different languages or applying similar testing techniques to common sorting alogrithms to determine what alogrithms are best for each scenario as well as how they are coded.

## Acknowledgments

* Thanks to the [r/ProgrammerHumor](https://www.reddit.com/r/ProgrammerHumor/) for the fun idea!
