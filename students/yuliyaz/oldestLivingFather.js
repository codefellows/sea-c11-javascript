

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

//returning the highest age of the father
var highestAge = 0
var personName
people.forEach(function(person){
	personName = person['name']
	var fatherArray = getFathersNames()
if (fatherArray.indexOf(personName) > -1 && person['age'] > highestAge) {
	 {
				highestAge = person.age;
			}
	}
return highestAge
});



//highest age of any person
var highestAge = 0
		function oldestPerson () {
	for (var i = 0; i < people.length; i++) {
	if (people[i].age && people[i].age > highestAge) {
				highestAge = people[i].age;
			}
		}

		return highestAge;
		};

		