let arr = [1,2,3,4,5] // 需要打乱的数组 空间复杂度o(n) 时间复杂度 o
// function shuffle(arr){
//     var random
//     for(var i =0;i<arr.length;i++){
//         random = Math.floor(Math.random() * arr.length);
//         var temp = arr[i];
//         arr[i] = arr[random];
//         arr[random] = temp;
//     }
//     return arr
// }

function isTrue(num){
    // return num%2==0
    return (num&1)==1
}

// console.log(shuffle(arr))
console.log(isTrue(3))
