
    function oldestLivingFather(people) {

        
        var fatherNames = _.pluck(people, 'father');
        fatherNames = _.uniq(fatherNames);
        fatherNames = _.compact(fatherNames);

        var Fathers = [];
        
        _.each(fatherNames, function (fatherName) {
            _.each(people, function (person) {
                if (fatherName === person.name) {
                 Fathers.push(person);   
                }
            });
        });
        
        var oldestFather;
        
       oldestFather = _.max(Fathers, function(Father) { 
           return Father.age; });
        
        return oldestFather.name;
        
    }
var oldGuy = oldestLivingFather(people);