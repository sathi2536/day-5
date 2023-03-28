// return palindromes
var arr=["madam","mom","dad","hello","amma","pappa"]
var palindrome= ()=>{
    let palindromes=[];
 for (let i=0;i<arr.length;i++){
   if (arr[i].split("").reverse().join("")===arr[i]){
   palindromes.push(arr[i]);
   }
    
 }
 return palindromes
}
console.log(palindrome());

