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
    var livingFathers = [];

    _.forEach(people, function (person, index) {
        if ((person.father) && (person.age)) {
            livingFathers.push(person.age);
        }
    });

    var oldest = _.max(livingFathers);

    var oldestFather;

    _.forEach(people, function (person, index) {
        if (person.age === oldest) {
            oldestFather = person.name;
        }

    });
    return oldestFather;
};

console.log(oldestLivingFather());