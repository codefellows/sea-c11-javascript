//Karl Gentner - CFF2 Javascript - oldestLivingFather function - 4/16/2014
// This method accepts an array of people and returns the name of the oldest living father.


function oldestLivingFather (people){
	var oldestFatherAge = -1;
	var oldestLivingFath;

	for (var i = 0; i < people.length; i++){
		if (people[i].father !== undefined) { // Continue if current father is defined.
			for (var j = 0; j <people.length; j++){
				//If the name from inner loop is equal to the father from the outer loop,
				//And if the age from the inner loop is defined,
				//And if the age is older than the current oldestFatherAge,
				//Then set the outer loop father to be the Oldest Living Father.
				if ((people[j].name === people[i].father)
					&& (people[j].age !== undefined)
					&& (people[j].age > oldestFatherAge)){ 
						oldestLivingFath = people[i].father; 
			}
		}
	}
}
return oldestLivingFath;
}


