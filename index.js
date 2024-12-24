let arr = [1,2,3,4,5,6,7,8];
let evenOne = [];
let oddOne = [];
for (let i=0; i<arr.length; i++){
    if(arr[i]%2==0){
        evenOne+=arr[i]+" ";
    }else{
        oddOne+=arr[i]+" ";
    }
}
console.log("Even : "+evenOne);
console.log("Odd : "+oddOne);