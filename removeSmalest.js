function removeSmallest(numbers) {
  let myNums = [...numbers]
  if(!numbers.length) {
    return []
  }
const min = Math.min.apply(Math, myNums)
const index = myNums.indexOf(min)
if (index > -1) {
  myNums.splice(index, 1); 
}
return myNums;
}

console.log(removeSmallest([1, 2, 3, 4, 5])) //> [2, 3, 4, 5]
console.log(removeSmallest([5, 3, 2, 1, 4])) //> [5, 3, 2, 4]
console.log(removeSmallest([2, 2, 1, 2, 1])) //> [2, 2, 2, 1]
console.log(removeSmallest([])) //> [] 
