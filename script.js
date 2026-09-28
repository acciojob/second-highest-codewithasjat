function secondlargest(arr){
    let largest = -Infinity
    let secondlargest = -Infinity
    for(let i=0 ; i<=arr.length-1 ; i++){
        if(arr[i]>largest){
               
            secondlargest = largest


            largest = arr[i]


        }
        if(secondlargest <arr[i] && largest >arr[i]){
            secondlargest = arr[i]

        }
    }
   return secondlargest
}