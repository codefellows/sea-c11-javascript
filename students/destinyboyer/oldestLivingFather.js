var fatherArray = [];
var ageArray = [];
var oldestLivingFather = [];

people.forEach(function(person){
  oldestFather = null;
  if (person.father){
    fatherArray.push(person.father);
    fatherArray = _.uniq(fatherArray);
}
return fatherArray;
})

people.forEach(function(person) {
  for (var i = 0; i < fatherArray.length; i++){
    if (fatherArray[i] === person.name) {
      ageArray.push(person.age);
      ageArray = _.compact(ageArray);
    };
  };
  return ageArray;
})


people.forEach(function(person){
  for (var i = 0; i < ageArray.length; i++) {
    if (ageArray[i] === person.age) {
      oldestLivingFather.push(person.name);
  };
  };
  return oldestLivingFather
})

