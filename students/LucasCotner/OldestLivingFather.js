var oldestLivingFather = function(people) { 
    var fathers = _.pluck(people, 'father');   
    var livingPeople = _.filter(people, 'age');   
    var livingPeople2 = _.pluck(livingPeople, 'name');
    var oldestFather;
    var oldestAge = _.reduce( people, function( age, person ) {
        var leng = people.length - 1;
        if ( age > person.age ) {
            if (person.name === people[leng].name) {
                return oldestFather;
            }
            return age;
        } else if ((_.contains(fathers,person.name)) && (_.contains(livingPeople2,person.name))) {    
            age = person.age;
            oldestFather = person.name;
            if (person.name === people[leng].name) {
                return oldestFather;
            }
            return age;            
        } else {
            if (person.name === people[leng].name) {     
                return oldestFather;
            }
            return age;
        }
    });
};