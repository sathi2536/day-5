// first letters to caps
        var stringArray = ["hello", "world", "lorem"];
        var arr= [];
        const titleCaps = ()=>{
            var first=stringArray[0].split("")
arr.push(first[0].toUpperCase() + first.slice(1).join(""));
var second=stringArray[1].split("")
arr.push(second[0].toUpperCase() + second.slice(1).join(""));
var third=stringArray[2].split("")
arr.push(third[0].toUpperCase() + third.slice(1).join(""));
console.log(arr)
       }

        titleCaps()
   