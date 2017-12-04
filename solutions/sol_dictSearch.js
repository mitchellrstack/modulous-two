/* Static solution for speed
const dict = [
  0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20,
  22, 24, 26, 28, 30, 32, 34, 36, 38, 40,
  42, 44, 46, 48, 50, 52, 54, 56, 58, 60,
  62, 64, 66, 68, 70, 72, 74, 76, 78, 80,
  82, 84, 86, 88, 90, 92, 94, 96, 98, 100
] */

// Or dynamic solution for accuracy but very poor speed
let dict = []
for (let i = 0; i < 1000; i++) {
  dict.push(i * 2)
}

const isEven = n => dict.indexOf(n) !== -1

module.exports = isEven
