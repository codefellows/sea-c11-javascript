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
