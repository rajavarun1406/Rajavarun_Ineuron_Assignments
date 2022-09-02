
let find_largest = (num)=>{
    let arr = [3,45,6,7,23,5,7,8];
    
    for(let i=0;i<num;i++){
        let max_index = i;
        let temp = arr[i];
        for(let j=i+1;j<arr.length;j++){
            if(arr[max_index]<arr[j]){
                max_index = j;
            }
        }
        arr[i] = arr[max_index];
        arr[max_index] = temp;
    }
    return arr[num-1]
}
let result = find_largest(3);
console.log(result);