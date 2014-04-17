var oldestLivingFather = function (people){
  var fatherNames;
  var isFather = [];

    //removes if age is missing
  var isAlive = _.filter(people, 'age');

  //removes if father attr is missing or not unique
  fatherNames =  _.uniq(_.filter(_.pluck(isAlive, 'father')));
  
  //itirates through father list, compares to living, pushes to new array
  for(var i = 0; i < fatherNames.length; i++){
    isFather.push(_.where(isAlive, {name: fatherNames[i]})[0]);
}
  //removes undefined
  isFather = _.compact(isFather)
 
  //returns highest value
  var oldDude = _.max(isFather, 'age');
  return oldDude.name
};