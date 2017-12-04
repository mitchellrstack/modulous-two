const colors = require('colors')
const isEvenFactory = require('./index.js')

// Constant for converting nanoseconds and seconds
const NS_PER_SEC = 1e9

// Number of iterations for each test, breaks when more than 1e7
const TEST_COUNT = 1e4
const TEST_NUM_RANGE = 1e6
const EDGE_CASES = true

// For storing tests to be done by each module. Generated beforehand for fair testing
let pendingTests = []
let completedTests = []

// Cases for testing besides negative and positive integers
const edgeCases = [
  { in: NaN, ex: false },
  { in: Infinity, ex: false },
  { in: -Infinity, ex: false },
  { in: '', ex: false },
  { in: [], ex: false },
  { in: undefined, ex: false },
  { in: null, ex: false },
  { in: function edge () {}, ex: false },
  { in: {}, ex: false }
]

// Generate Tests
for (let i = 0; i < TEST_COUNT; i++) {
  const num = (Math.floor(Math.random() * TEST_NUM_RANGE) - (TEST_NUM_RANGE / 2))
  pendingTests.push({ in: num, ex: (num & 1) === 0 }) // random tests
  // pendingTests.push({ in: i, ex: (i & 1) === 0 }) // iterative tests
}

// Concat the edge cases into the penging tests array
// if EDGE_CASES is enabled at the top.
if (EDGE_CASES) {
  pendingTests = pendingTests.concat(edgeCases)
}

function test (moduleName, testFunction) {
  let passed = 0
  let failed = 0

  // Get start time
  let startTime = process.hrtime()

  // Run Tests
  for (let i = 0; i < pendingTests.length; i++) {
    const result = testFunction(pendingTests[i].in)
    const passFail = result === pendingTests[i].ex

    if (passFail) {
      passed++
    } else {
      failed++
    }
    // console.log(`${i} ${passFail ? 'PASSED'.green : 'FAILED'.red }: IN[${tests[i].in}] => RES[${result}] => EXP[${tests[i].ex}]`)
  }

  const diff = process.hrtime(startTime)
  const time = (diff[0] * NS_PER_SEC + diff[1]) / NS_PER_SEC
  const timeString = time.toString().yellow + ' seconds'
  const accuracy = passed / (pendingTests.length) * 100
  const accuracyString = accuracy === 100 ? `${accuracy}%`.green : `${accuracy}%`.yellow
  const opsPerSecond = Math.floor(pendingTests.length / time)

  completedTests.push({
    name: moduleName,
    opsPerSecond: opsPerSecond,
    timeInSeconds: time,
    accuracy: accuracy,
    passed: passed,
    failed: failed
  })

  //console.log(`-${moduleName} => ${opsPerSecond}\n  Took ${timeString} with ${accuracyString} accuracy.\n  Passed ${passed} tests and Failed ${failed} tests.`)
}

const names = isEvenFactory('DEBUG')

const even = names.map((sol) => isEvenFactory(sol))

let isEvenFunctions = {}

for (let i = 0; i < names.length; i++) {
  isEvenFunctions[names[i]] = even[i]
}

const run = (isEvenFunctions) => {
  console.log('Starting tests...')
  const allStartTime = process.hrtime()
  let progress = 1
  // Run tests on each module
  for (let key in isEvenFunctions) {
    const func = { name: key, fn: isEvenFunctions[key] }
    console.log(`Testing on ${func.name} has started...`)
    test(func.name, func.fn)
    console.log(`Testing on ${func.name} completed! (${progress++}/${Object.keys(isEvenFunctions).length})`)
  }

  const allFinishTime = process.hrtime(allStartTime)

  // Sort the completed tests by accuracy, then ops per second
  completedTests.sort((a, b) => {
    if (a.accuracy > b.accuracy) {
      return -1
    } else if (a.accuracy < b.accuracy) {
      return 1
    } else {
      if (a.opsPerSecond > b.opsPerSecond) {
        return -1
      } else if (a.opsPerSecond < b.opsPerSecond) {
        return 1
      } else {
        return 0
      }
    }
  })

  let results = []

  // Format the test results and print them to console
  completedTests.map(module => {
    const name = module.name
    const opsPerSecond = `${module.opsPerSecond} ops/second`
    const accuracy = module.accuracy + '% accuracy'
    let time = module.timeInSeconds

    let timediff = (time / ((allFinishTime[0] * NS_PER_SEC + allFinishTime[1]) / NS_PER_SEC))
    if (timediff < 0.1) {
      time += ' seconds'
      time = time.green
    } else if (timediff < 0.2) {
      time += ' seconds'
      time = time.yellow
    } else {
      time += ' seconds'
      time = time.red
    }

    const accuracyString = module.accuracy === 100 ? `${module.accuracy}% accuracy`.green : module.accuracy > 50 ? `${module.accuracy}% accuracy`.yellow : `${module.accuracy}% accuracy`.red
    const logString = `<li><b>${name}</b><br/> ${opsPerSecond}<br/> ${accuracy}</li>`
    const strLine1 = `-- ${name} --`
    const printString = `${strLine1}\n|  ${opsPerSecond},  ${accuracyString}\n|  ${time},  Passed: ${module.passed}, Failed: ${module.failed}\n` + '-'.repeat(strLine1.length) + '\n'
    console.log(printString)
    results.push(logString)
  })
  console.log(`Test results completed in ${(allFinishTime[0] * NS_PER_SEC + allFinishTime[1]) / NS_PER_SEC} seconds`)
}

run(isEvenFunctions)
