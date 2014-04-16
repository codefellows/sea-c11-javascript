

var highestAge = 0
		function oldestPerson () {
	for (var i = 0; i < people.length; i++) {
	if (people[i].age && people[i].age > highestAge) {
				highestAge = people[i].age;
			}
		}

		return highestAge;
		}


var fathers = []
function getFathersNames() {
	for (var i = 0; i < people.length; i++) {
		var fatherName = people[i].father
	fathers.push(fatherName);
}
return fathers;
}



