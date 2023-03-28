const arr = [1,2,3,4,5];
const k = 2; // Number of times to rotate the array

const rotatedArr = (function(arr, k) {
  const len = arr.length;
  
  // If k is greater than the length of the array, set k to the remainder
  // of k divided by the length of the array to avoid unnecessary iterations
  k = k % len;
  
  // Rotate the array k times
  for (let i = 0; i < k; i++) {
    const temp = arr[0];
    
    for (let j = 0; j < len - 1; j++) {
      arr[j] = arr[j + 1];
    }
    
    arr[len - 1] = temp;
  }
  
  return arr;
})(arr, k);

console.log(rotatedArr);
