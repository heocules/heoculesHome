var arr = []
for(var i = 0 ; i < 5; i++){
    arr[i] = function() {
        console.log("a");
            return i;
        }
}

for(var index in arr){
    console.log(arr[index]())
}