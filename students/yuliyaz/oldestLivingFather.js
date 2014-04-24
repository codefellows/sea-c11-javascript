
function oldestLivingFather(){
		var oldestFather;
	    var highestAge = 0;
		var fatherArray = function () {
		var fathers = [];
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
	var personName = person['name'];
	var personAge = person['age'];
	if (fatherArray().indexOf(personName) > -1 && person['age'] > highestAge) {
				highestAge = personAge;
				oldestFather = personName;
	}

	});
return oldestFather + ' is oldest father and he is ' + highestAge;
}


