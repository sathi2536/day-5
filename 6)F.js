//return medianm array
((array1,arry2) => {
    let middle =array1.length;

    let totalArray =array1.concat(arry2).sort((a,b)=> a-b);

    console.log((totalArray[middle -1] + totalArray[middle])/20);

})([1,2,3,4,5],[6,7,8,9,10]);
