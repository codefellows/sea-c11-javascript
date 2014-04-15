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

    _.pluck(people, 'age');
 
    var ages = _.pluck(people, 'age');
    
	_.max(ages);

    var oldest = _.max(ages);

    var oldestPerson;

    _.forEach(people, function (person, index) {
        if (person.age === oldest) {
            oldestPerson = person.name;
        }
    });
	
    _.forEach(people, function (person, index) {
        if (oldestPerson === person.father) {
            console.log(oldestPerson);
        }
    });

};

oldestLivingFather();