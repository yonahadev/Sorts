let unsortedData = [4, 2, 7, 6, 5, 10, 1]
const insertionSort = (unsortedData) => {
  let sortedList = []
   for (let i = 0; i < unsortedData.length; i++) {
      if (sortedList.length === 0) {
        sortedList.push(unsortedData[i])
      } else {
        for (let j = 0; j < unsortedData.length; j++) {
          if (unsortedData[i] > sortedList[j]) {
            continue
          } else {
            sortedList.splice(j, 0, unsortedData[i])
            break
            }
            }
          }
        }
        return sortedList
      } 

const bubbleSort = (unsortedData) => {
  let temp = 0
  let flag = false
  while (flag == false ) {
    flag = true
    for (let i = 0; i < unsortedData.length; i++) {
      if (unsortedData[i] > unsortedData[i + 1]) {
        flag = false
        temp = unsortedData[i + 1]
        unsortedData[i + 1] = unsortedData[i]
        unsortedData[i] = temp
      } 
    }
  }
  return unsortedData
}

console.log(bubbleSort(unsortedData))