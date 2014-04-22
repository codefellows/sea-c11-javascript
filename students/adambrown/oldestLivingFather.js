// Given the following data structure
// implement a oldestLivingFather method 
// that will return the name of the oldest 
// living father.

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
];

function oldestLivingFather(people){
  var oldest = 0;
  var dadNames=[];
  var oldestLiving = {age:0};
  
  people.forEach(function(person){
       dadNames.push(person.father);
    });
  people.forEach(function(person){
    dadNames.forEach(function(dad){
      if((person.name === dad) && (person.age > oldestLiving.age)){
          oldestLiving = person;
        }
    });
  }); 
  console.log(oldestLiving.age);
  return oldestLiving.age;

}
oldestLivingFather(people);
