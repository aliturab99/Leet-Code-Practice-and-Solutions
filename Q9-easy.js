// Given an integer x, return true if x is a palindrome, and false otherwise.



// var isPalindrome = function(x) {
//     x = x.toString();
//     const xl = x.length;
//     if( x.length % 2 === 0 ){
//         for( i = 0; i < xl / 2 ; i++){
//         // console.log(x.charAt(i))
//                 for( y = xl; y >= xl / 2; y--  ){
//         //         console.log("I", x.charAt(i))
//                 console.log("Y", x.charAt(y))
//             }
//         }
//     }else{
//         console.log(Math.floor(x.length / 2))
//     }
// };

// isPalindrome(12222221)


const check = (num) => {
    let numStr = num.toString()
    const arr1 = []
    const arr2 = []
    let result;
    for( x = 0; x < numStr.length; x++ ){
        arr1.push(numStr[x])
    }
    for( y = numStr.length - 1; y >= 0; y-- ){
        arr2.push(numStr[y]) 
    }
    for( i = 0; i < numStr.length; i++){
        if(arr1[i] == arr2[i]){
            result = true
        }else{
            result = false;
            break;
        }
    }
    return result
}

console.log(check(100))