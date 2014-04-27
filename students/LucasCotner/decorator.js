var countDecorator = function(func) {
    var count = 0; 
    function change() {
        count++;
        return func.apply (this,arguments);
    }
    
    change.callCount = function() {
    	return count;
    }
    return change;
};
