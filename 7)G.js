var arr = [1, 3, 5, 7, 3, 3, 7, 9, 4, 3, 8, 3, 2, 6, 3];

var uniqueArr = (function(arr) {
  var seen = {};
  return arr.filter(function(item) {
    return seen.hasOwnProperty(item) ? false : (seen[item] = true);
  });
})(arr);

console.log(uniqueArr);
