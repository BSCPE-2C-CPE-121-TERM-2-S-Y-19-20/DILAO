var counter = [
    []
  ]; // Radix sort Array container to hold arrays from 0th digit to 9th digits
  
  function radixSortLSD(array) {
    var max = 0,
      mod = 10,
      dev = 1; //max
    for (var i = 0; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }
    // determine large item length
    var maxDigitLength = (max + '').length;
    for (var i = 0; i < maxDigitLength; i++, dev *= 10, mod *= 10) {
      for (var j = 0; j < array.length; j++) {
        var bucket = Math.floor((array[j] % mod) / dev); // Formula to get the significant digit
        if (counter[bucket] == undefined) {
          counter[bucket] = [];
        }
        counter[bucket].push(array[j]);
      }
      var pos = 0;
      for (var j = 0; j < counter.length; j++) {
        var value = undefined;
        if (counter[j] != undefined) {
          while ((value = counter[j].shift()) != undefined) {
            array[pos++] = value;
          }
        }
      }
    }
    document.write("ARRAY: " + array);
  };
  
  var sampleArray = [125,336,484,98,7,235,479,905,870,231,492,73];
  radixSortLSD(sampleArray);