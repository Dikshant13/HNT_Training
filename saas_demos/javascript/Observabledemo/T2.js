
var arr = [10,20,30,40,50];
 
 console.log("Original array: "+arr)
    var x = 4; //position of element 
     
    var pos = 1;//element has to be changed at this position
 
    // Storing the moved element in a temp

    var temp = arr[x];
     
    // shifting elements forward
    var i;
    for (i = x; i >= pos; i--)
        {
            arr[i] = arr[i - 1];
        }
     
    // Insert moved element at position 
    arr[pos] = temp;
 
console.log("After move: "+arr)