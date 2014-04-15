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
  },
  {
    name: 'Jeff',
    age: 75,
    father: 'Johnny'
  }
]

 

function oldestLivingFather() {
    var oldestAge = 0;
    var oldestName = '';
    var fatherNames = _.pluck(people, 'father');
    
    _.each(people, function(person) {
        if (person.age) {
            if(person.age > oldestAge) {
              oldestAge = person.age;
            }
        } 
    });
    
    _.each(people, function(person) {
        if (person.age === oldestAge){
        oldestName=person.name;
        }
    });
    
    var livingFathers = _.filter(people, function (person) {
        if (!person.hasOwnProperty('name') || !person.hasOwnProperty('age')) return false;
        
        return _.contains(fatherNames, person.name);
        
    });
    
    var oldestLivingFather = {
        name: false,
        age: 0
    };
    
    _.each(livingFathers, function (livingFather) {
        if (livingFather.age > oldestLivingFather.age) oldestLivingFather = livingFather 
    });
    
    console.log(oldestLivingFather.age);
}
oldestLivingFather();