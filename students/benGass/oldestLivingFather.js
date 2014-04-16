var oldestLivingFather = function(persons){
  // create an array of father names, no repeats
  var fatherNames = _.uniq(_.filter(_.pluck(persons, 'father')), undefined);
  var fathers= [];
  var oldest = { name: 'none', age: 0 }
  // populates fathers array with father objects
  for (i=0; i< fatherNames.length; i++){
    temp = (_.where(persons, {name: fatherNames[i]}));
    fathers.push(temp[0]); 
  };
  // locate oldest father in array, only fathers with ages considered
  for (i=0; i<fathers.length; i++){
    if (fathers[i].age > oldest.age) {oldest = fathers[i];}
  }  
  return oldest.name;
};

var people = [
  {
    name: 'Hank',
    age: 29,
    father: 'Don'
  },
  {
    name: 'Deborah',
    age: 30,
    father: 'Don'
  },
  {
    name: 'Danny',
    age: 24,
    father: 'Don'
  },
  {
    name: 'Don',
    age: 64,
    father: 'Haskell'
  },
  {
    name: 'Haskell',
    father: 'Finus'
  },
  {
    name: 'Finus'
  }
]
