function countingSort(arr){
    return arr.reduce( (acc, v) => (acc[v] = (acc[v] || 0) + 1, acc), [] )
              .reduce( (acc, n, i) => acc.concat(Array(n).fill(i)), [] ); 
  }
  

  var arr = [5, 5, 6, 7, 8, 1, 6, 7, 9, 8, 1, 5];
  document.write(countingSort(arr)); 