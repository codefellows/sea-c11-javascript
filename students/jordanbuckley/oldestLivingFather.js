function oldestLivingFather(people) {
  var fatherNames = [];
  var fatherArray = [];
  var oldestAge = 0;
  var theOldestLivingFather;
  
  // Find names of fathers
  for (var i = 0; i < people.length; i++) {
    if (people[i].father) {
      fatherNames.push(people[i].father);
    }
  }
  // Remove duplicate names
  fatherNames = _.uniq(fatherNames);
  
  // Build array of fathers
  for (var i = 0; i < people.length; i++) {
    if (fatherNames.indexOf(people[i].name) > -1) {
      fatherArray.push(people[i]);
    }
  }
  
  // Find oldest living father
  for (var i = 0; i < fatherArray.length; i++) {
    if (fatherArray[i].age > oldestAge ) {
      oldestAge = fatherArray[i].age;
      theOldestLivingFather = fatherArray[i];
    }
  }
  return theOldestLivingFather.name;
}
