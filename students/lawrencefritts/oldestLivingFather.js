// oldestLivingFather.js
// 
// This program will take an array of people objects and use that to determine
// the oldest living father in the group based on the father listing in each
// people object.
//
// The code is designed for the following people object:
//       {
//          name: 'value',
//          age: value,
//          father: 'value'
//       }
// --if the person is dead then the age key-value is not present; if the 
//   person's father is not know then the father key-value is not present.
//
// I chose to implement this without any libraries that may have made it
// simpler for the challenge.
//
// Author: Lawerence Fritts
// Version: 1.0

function oldestLivingFather(passedArray) {

    var livingFathers = [];    //holds the index of all living fathers

    //build an array of living fathers
    for (var i = 0; i < passedArray.length; i++) {
        if (passedArray[i].father) {
            var fatherName = passedArray[i].father;
            //find and store array index and age
            for (var j = 0; j < passedArray.length; j++) {
                if (fatherName = passedArray[j].name) {
                    if (passedArray[j].age) {
                        //need to add check for father that already added
                        livingFathers.push(j);
                    }
                }
            }
        }
    }

    //search the livingFathers array for oldest and return name
    var oldestFatherName = "";
    var oldestAge = 0;
    for (var i = 0; i < livingFathers.length; i++) {
        if (passedArray[livingFathers[i]].age > oldestAge) {
            oldestFatherName = passedArray[livingFathers[i]].name;
        }
    }
    
    return oldestFatherName;
}