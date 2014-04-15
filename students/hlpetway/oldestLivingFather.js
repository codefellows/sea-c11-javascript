// Given the following data structure
// implement a oldestLivingFather method 
// that will return the name of the oldest 
// living father.

var people = [{
    name: 'Hank',
    age: 29,
    father: 'Don'
}, {
    name: 'Deborah',
    age: 30,
    father: 'Don'
}, {
    name: 'Danny',
    age: 24,
    father: 'Don'
}, {
    name: 'Don',
    age: 64,
    father: 'Haskell'
}, {
    name: 'Haskell',
    father: 'Finus'
}, {
    name: 'Finus'
}];

var oldestLivingFather = function () {
    var fathers = [];

    _.forEach(people, function (person, index) {
        if ((person.father) && (person.age)) {
            fathers.push(person.age);
        }
    });

    _.max(fathers);

    //assign this age to a variable
    var oldest = _.max(fathers);

    var oldestFather;

    //Now Search for this age in our array
    _.forEach(people, function (person, index) {
        if (person.age === oldest) {
            oldestFather = person.name;
            console.log(oldestFather);
        }
    });

};

oldestLivingFather();