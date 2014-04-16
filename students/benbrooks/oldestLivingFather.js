function oldestLivingFather(people) {
    // Get father names
    var fatherNames = _.pluck(people, 'father');

    // Eliminate duplicates
    fatherNames = _.uniq(fatherNames);

    // Get rid of undefined names
    fatherNames = _.compact(fatherNames);

    // Get living fathers from people
    var livingFathers = _.filter(people, function (person) {

        // If the person doesn't have a name and age, we're not interested    
        if (!person.hasOwnProperty('name') || !person.hasOwnProperty('age')) return false;

        // Are they in our list of fathers?
        return _.contains(fatherNames, person.name);

    });

    var oldestLivingFather = _.reduce(livingFathers, function (oldestLivingFather, livingFather) {
        if (livingFather.age > oldestLivingFather.age) return livingFather;
        else return oldestLivingFather;
    });

    return oldestLivingFather.name;
}