function rotateArray (array, k) {
    var newArray = [];
    if(k > array.length){
        return array;
    }

    for (var i=0; i < k; i++){
        newArray.unshift(array.pop());    
    }

    newArray = newArray.concat(array);

    return newArray;
}

var A = [3, 8, 9, 7, 6];

var K = 3;

rotateArray(A, K);