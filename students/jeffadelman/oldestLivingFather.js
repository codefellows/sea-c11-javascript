var oldestLivingFather = function(people){
  var fathersArray = [],
      livingPeople = [],
      oldestLivingFather = 'There are no living fathers';

  //Find all the fathers and push their names to the fathersArray
  for(i=0; i< people.length; i++){
    var father = people[i].father;
    if (father !== undefined){
      if (fathersArray.indexOf(father) == -1){
      fathersArray.push(father);
      }
    }
  }

  //Find all the living people and push them to the livingPeople array
  for(i=0; i<people.length; i++){
    if(people[i].age !== undefined){
      livingPeople.push(people[i]);
    }
  }

  //Sort the livingPeople array by age
  livingPeople.sort(function(a,b) { 
    return parseFloat(b.age) - parseFloat(a.age); 
  });

  //Look through the livingPeople array to find the first person who is also in the fathersArray.
  //If there are no living fathers return "There are no living fathers."
  for (i=0; i< livingPeople.length; i++){
    var name = livingPeople[i].name;
    if(fathersArray.indexOf(name) !== -1){
      oldestLivingFather = name;
      break;
    }
  }

  return oldestLivingFather;
};