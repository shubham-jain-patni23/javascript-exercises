const sumAll = function(a,b) {
    let num  = 1;
    if(typeof a !== typeof num || typeof b!== typeof num){
        return 'ERROR';
    }
    if(a<0 || b<0){
        return 'ERROR';
    }
    if(Math.floor(a)!==a || Math.floor(b)!==b){
        return 'ERROR';
    }

    if(a > b){
        [a,b] = [b,a];
    }

    let ans = 0;
    for(let i= a;i<=b;i++){
        ans+= i;
    }
return ans;
};

// Do not edit below this line
module.exports = sumAll;
 