var oldestLivingFather = function(peopleArray) {
    var oldAge = 0;
    var dad = {};
    var ages = {};
    var oldName;
    for (var i = 0; i < peopleArray.length; i++) {
        if (peopleArray[i].hasOwnProperty('father')) {

            dad[peopleArray[i]["father"]] = 0;
        }
        ages[peopleArray[i]['name']] = peopleArray[i]["age"];
    }
    for (var property in dad) {
        if (ages[property] > oldAge) {
            oldAge = ages[property];
            oldName = property;
        }
    }
    return oldName;
};