function selectionSort(arr){
    let min;
    for (let i = 0; i < arr.length; i++){
        min = i;
        for(let j = i +1; j < arr.length; j++){
            if(arr[min] > arr[j]) min = j;
        }

        const temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
}

const arr1 = [1,2,10,20,100,40,30,5];

selectionSort(arr1);

console.log(arr1);