var oldestLivingFather = function(input){

  //Find names of all fathers
  var fatherNames = _.compact(_.uniq(_.pluck(input, 'father')));

  //Create an array of only fathers
  var fathers = _.filter(input, function(person){
      return _.contains(fatherNames, person.name);
  });

  //Find the oldest living father
  var oldestLivingFatherObject = _.max(fathers, 'age');

  //Grab his name
  var oldestLivingFather = oldestLivingFatherObject.name;

  console.log(oldestLivingFather);
  return oldestLivingFather;

};
