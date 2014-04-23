function oldestLivingFather(people) {
  var oldestFather = {age: 0};
  var currFather;
  people.forEach(function(person, index) {
    if(person.age && person.father) {
      currFather = _.where(people, {name: person.father})[0];
      if(currFather.age) {
        if(currFather.age > oldestFather.age){
          oldestFather = currFather;
        }
      }
    }
  });
  return oldestFather;
}
