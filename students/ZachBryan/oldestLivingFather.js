//stuck on comparing if the have a father listed or not.
var oldestLivingFather = function (person){
  //removes if age is missing
  var isAlive = _.filter(person, 'age')

  //removes if father attr is missing or not unique
  var hasFather =  _.filter(_.uniq(isAlive, 'father'));

  // var isFather = _.filter(hasFather.father && isAlive.name);
 
  //sorts remainder by accending age
  var oldDude = _.map(_.sortBy(hasFather, 'age'), _.values);
  return oldDude.slice([-1]);
};