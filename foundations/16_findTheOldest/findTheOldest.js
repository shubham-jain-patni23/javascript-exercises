const findTheOldest = function(people) {
    let oldest = people.reduce((currOld, currPerson) => {
        
        if('name' in currOld){
            let currAge;
            let prevAge;
            let currYear = (new Date()).getFullYear();

            if('yearOfDeath' in currPerson){
                currAge = currPerson.yearOfDeath - currPerson.yearOfBirth;
            }
            else{
                currAge = currYear - currPerson.yearOfBirth;
            }

            if('yearOfDeath' in currOld){
                prevAge = currOld.yearOfDeath - currOld.yearOfBirth;
            }
            else{
                prevAge = currYear - currOld.yearOfBirth;
            }
            if(currAge > prevAge){
                currOld = currPerson;
            }
        }
        else{
            currOld = currPerson;
        }
        return currOld;
    }, {});

return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
 