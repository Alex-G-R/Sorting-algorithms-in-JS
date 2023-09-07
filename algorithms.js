let array = [9, 5, 2, 1, 3, 4, 6, 7, 8]

function InsertionSort(ar)
{
    for (var i = 0; i < ar.length; i++)
    {
        for (var j = i+1; j < ar.length; j++)
        {
            if(ar[i]>ar[j])
            {
                [ar[i],ar[j]] = [ar[j],ar[i]]
            
            }
        }
    }
    return ar;
}

function bubleSort(arr){
    console.log(`Before buble sort ${arr}`)

    let temp;

    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j + 1]){
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                array[j] = temp;
            }
        }
    }

    console.log(`After bubble sort ${arr}`)
}

function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[Math.floor(Math.random() * arr.length)];
  
    const less = [];
    const equal = [];
    const greater = [];
  
    for (const element of arr) {
      if (element < pivot) {
        less.push(element);
      } else if (element === pivot) {
        equal.push(element);
      } else {
        greater.push(element);
      }
    }
  
    return [...quickSort(less), ...equal, ...quickSort(greater)];
  }
  
  const sortedArray = quickSort(array);
  console.log(sortedArray);
  