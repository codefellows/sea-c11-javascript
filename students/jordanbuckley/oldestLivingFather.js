function oldestLivingFather(people) {
  var fatherArray = [];
  
  // Find names of fathers & remove duplicates
  var fatherNames = _.uniq(_.pluck(_.filter(people, 'father'), 'father'));
  
  // Build array of fathers
  for (var i = 0; i < people.length; i++) {
    if (fatherNames.indexOf(people[i].name) > -1) {
      fatherArray.push(people[i]);
    }
  }
  
  // Return oldest living father's name
  return _.max(fatherArray, 'age').name;
}
