

var highestAge = 0
		function oldestPerson () {
	for (var i = 0; i < people.length; i++) {
	if (people[i].age && people[i].age > highestAge) {
				highestAge = people[i].age;
			}
		}

		return highestAge;
		};


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


people.forEach(function(person){
	var personName = person['name']
	var fatherArray = getFathersNames()
	var oldestAge = oldestPerson()
	if (fatherArray.indexOf(personName) > -1 && person['age'] === oldestAge){
		var oldestFatherName = person['name'];
}
return oldestFatherName
});





