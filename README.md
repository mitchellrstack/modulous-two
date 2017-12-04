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

### Motivation

I got motivation to do this quick project because of all of the solutions that r/ProgrammerHumor had for determining is a number is even or odd. So I came up with as many solutions as I could to try to find the fastest possible solution to this problem in JavaScript. Test results are posted below for those interested in the numbers behind each test and which modules performed best.

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

## Authors

* **Mitchell Stack**

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
