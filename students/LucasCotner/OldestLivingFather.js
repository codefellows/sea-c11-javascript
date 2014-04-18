var oldestLivingFather = function(people) { 
    var fathers = _.compact(_.unique(_.pluck(people, 'father')));

    var matchingFathers = []; 
    fathers.forEach(function(name) {
        matchingFathers.push(_.reduce(_.where(people, {name: name})));
    });
    
    var oldestLivingFather = _.max(_.compact(matchingFathers), function(dad) {
      return dad.age
    });
    return oldestLivingFather.name;
};