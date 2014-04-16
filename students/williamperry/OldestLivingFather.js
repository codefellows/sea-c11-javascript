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
    
    //initiating variables for use in below functions
    var oldestAge = 0;
    var oldestName = '';

    //finding persons with father name (as "fatherNames")
    var fatherNames = _.pluck(people, 'father');
    
    _.each(people, function(person) {
        if (person.age) {
            if(person.age > oldestAge) {
              oldestAge = person.age;
            }
        } 
    });

    //determining name with oldest age
    _.each(people, function(person) {
        if (person.age === oldestAge){
        oldestName=person.name;
        }
    });

    //finding "living fathers" from people by eliminating those which do not have "age" property    
    var livingFathers = _.filter(people, function (person) {
        if (!person.hasOwnProperty('name') || !person.hasOwnProperty('age')) return false;
        
        return _.contains(fatherNames, person.name);
        
    });


    //initiating variable for use in _.each function below (churns through until it has found highest "age")
    var oldestLivingFather = {
        name: false,
        age: 0
    };
    
    _.each(livingFathers, function (livingFather) {
        if (livingFather.age > oldestLivingFather.age) oldestLivingFather = livingFather 
    });
    
}
oldestLivingFather();