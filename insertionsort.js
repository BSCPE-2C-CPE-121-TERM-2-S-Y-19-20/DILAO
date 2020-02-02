function insertionSort(arr) {
    for (var i = 1, len = arr.length; i < len; i++) {
        key = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            j--;
        }
        arr[j + 1] = key;
        document.write(arr, "<br>");
    }
    return arr;
}

var arr = [20,16,5,9,2,12,4,10];
document.write(insertionSort(arr));