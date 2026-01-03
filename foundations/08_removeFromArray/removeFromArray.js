const removeFromArray = function(arr) {
    for(let items of arguments){
        if(typeof items === typeof Array){
            continue;
        }
        let count = 0 ; 

        while(true){

            for(let i = 0;i<arr.length;i++){
                if(arr[i]===items){
                    arr.splice(i,1);
                    count++;
                }
            }
            if(count==0){
                break;
            }
            else{
                count = 0;
            }
        }
    }
return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
 