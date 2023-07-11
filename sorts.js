const unsortedData = [4, 2, 7, 6, 5, 10, 1]
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

console.log(insertionSort(unsortedData))