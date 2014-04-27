var preferredName = function(nameA, nameB){
  return((nameA || nameB) && !(nameA && nameB)) ? nameA||nameB : false;
};

