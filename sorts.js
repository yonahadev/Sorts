let list = [4, 2, 7, 6, 5, 10, 1]

const insertionSort = (list) => {
  let sortedList = []
   for (let i = 0; i < list.length; i++) {
      if (sortedList.length === 0) {
        sortedList.push(list[i])
      } else {
        for (let j = 0; j < list.length; j++) {
          if (list[i] > sortedList[j]) {
            continue
          } else {
            sortedList.splice(j, 0, list[i])
            break
            }
            }
          }
        }
        return sortedList
} 

const bubbleSort = (list) => {
  let temp = 0
  let flag = false
  while (flag == false ) {
    flag = true
    for (let i = 0; i < list.length-1; i++) {
      if (list[i] > list[i + 1]) {
        flag = false
        temp = list[i + 1]
        list[i + 1] = list[i]
        list[i] = temp
      } 
    }
  }
  return list
}

const mergeSort = (list) => {
  const merge = (left, right, list) => {
    let leftCounter = 0
    let rightCounter = 0
    let listIndex = 0
    while (leftCounter < left.length && rightCounter < right.length) { //keeps going until either list has finished being iterated
      if (left[leftCounter] <= right[rightCounter]) {
        list[listIndex] = left[leftCounter]
        leftCounter++
      } else {
        list[listIndex] = right[rightCounter]
        rightCounter++
      }
      listIndex++
    }
    //pust the rest of the remaining list into list
    while (leftCounter < left.length) {
      list[listIndex] = left[leftCounter]
      leftCounter++
      listIndex++ 
    }
    while (rightCounter < right.length) {
      list[listIndex] = right[rightCounter]
      rightCounter++
      listIndex++
    }
    console.log(list)
  }
    
  if (list.length === 1) return //base case that checks sub lists on each call
  const middle = Math.ceil(list.length / 2)
  const leftSide = list.slice(0, middle)
  const rightSide = list.slice(middle)
  mergeSort(leftSide)
  mergeSort(rightSide)
  merge(leftSide, rightSide, list) 


  return list
}

console.log(mergeSort(list))