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

    var oldest = _.max(fathers);

    var oldestFather;

    _.forEach(people, function (person, index) {
        if (person.age === oldest) {
            oldestFather = person.name;
            console.log(oldestFather);
        }
    });

};

oldestLivingFather();