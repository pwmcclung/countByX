function countBy(x, n) {
let sum = 0
let rotations = 0;
  let newArr = []
  while (rotations < n){
    sum +=  x
    newArr.push(sum)
    rotations++
  }
  return newArr
}
