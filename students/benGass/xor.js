
var preferredName = function(a, b){
  return((a || b) && !(a && b)) ? a||b : false;
};

