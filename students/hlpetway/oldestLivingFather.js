var oldestLivingFather = function () {

    var fathers = [];

    _.forEach(people, function (person, index) {
        if (person.father) {
            fathers.push(person.father);
        }
    });

    var agesLivingFathers = [];

    _.forEach(people, function (person, index) {
        for (i = 0; i < fathers.length; i++) {
            if (fathers[i] === person.name) {
                agesLivingFathers.push(person.age);
            }
        }
    });

    var oldestLivingFatherAge = _.max(agesLivingFathers);

    _.forEach(people, function (person, index) {
        if (oldestLivingFatherAge === person.age) {
            oldestLivingFather = person.name;
        }
    });
    
    return oldestLivingFather;
};

oldestLivingFather();