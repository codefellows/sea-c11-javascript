

var fathers = []
function getFathersNames() {
	for (var i = 0; i < people.length; i++) {
		if (people[i].father){
			var fatherName = people[i].father;
			if (fathers.indexOf(fatherName) === -1) {
				fathers.push(fatherName);
			}
		}
	}
	return fathers;
};

var highestAge = 0
var oldestFather
function oldestLivingFather(){
people.forEach(function(person){
	var personName = person['name']
	var personAge = person['age']
	var fatherArray = getFathersNames()
if (fatherArray.indexOf(personName) > -1 && person['age'] > highestAge) {
	 {
				highestAge = personAge;
				oldestFather = personName;
			}
	}

});
return oldestFather + ' is oldest father and he is ' + highestAge
}


