//Karl Gentner - CFF2 Javascript - oldestLivingFather function - 4/21/2014
// This method accepts an array of people and returns the name of the oldest living father.
//** based on some different approaches outlined in class by other class members.

function oldestLivingFather (people){
  
  // create an array of fathers
  var dads = [];
  for (var i = 0; i < people.length; i++){
  // make sure that there are no undefined fathers & that each is unique
    if ((typeof people[i].father !== 'undefined') && (dads.indexOf(people[i].father) === -1)){
      dads.push(people[i].father);
    }
  }
  
  //compare 'dads' names with 'people' names
  //and compare ages to find oldest living father
  var oldestLivingFath = {age : -1};
  var currentFath = {age: -1};

  for (i = 0; i < dads.length; i++){
    currentFath = _.where(people, {'name': dads[i]})[0]; //LoDash _.where for finding names in 'people'
    if (typeof currentFath !== 'undefined' && (currentFath.age > oldestLivingFath.age)){
       oldestLivingFath = currentFath;
    } 
  }
  return oldestLivingFath.name;
}


