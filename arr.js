//BENCHMARK TEST FOR COMPARING SPREAD AND CONCAT

const arrSize = 1000000
const runs = 50

//fill two arrays
const arr1 = []
const arr2 = []
for (let i = 0; i < arrSize; ++i) {
  arr1.push(i)
  arr2.push(i)
}

//get spread time on arrays
let spreadTime = 0
for (let i = 0; i < runs; ++i) {
  const start = performance.now()
  const arr3 = [...arr1, ...arr2]
  const end = performance.now()

  spreadTime += end - start
}

//get concat time on arrays
let concTime = 0
for (let i = 0; i < runs; ++i) {
  const start = performance.now()
  const arr3 = arr1.concat(arr2)
  const end = performance.now()

  concTime += end - start
}

//Setting avg of spread and conc
spreadTime = Math.round((spreadTime / runs) * 1000) / 1000
concTime = Math.round((concTime / runs) * 1000) / 1000

console.log(`${arrSize} items - spread: ${spreadTime}ms concat: ${concTime}ms`)
