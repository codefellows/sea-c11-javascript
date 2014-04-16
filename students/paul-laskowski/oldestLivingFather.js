
function oldestLivingFather(people){
	var fatherNames=[];
	var fathers=[];
	var oldestLivingFather
	
	//create array of unique names listed in the father property of people (leaving out undefined father names)
	fatherNames = _.compact(_.uniq(_.pluck(people, 'father')));
	
	//retrieve all of the people objects with a name property that matches any father names
	fatherNames.forEach(function(fname){
			fathers.push(_.reduce(_.where(people, {name: fname})));
		});
	
	// find the oldest of the fathers objects that were retrieved, based on the age property
	// (leaving out undefined fathers (i.e. listed as a father, but did not have a name entry in people))
	oldestLivingFather = _.max(_.compact(fathers), function(item) {return item.age});
	
	return oldestLivingFather.name
}
