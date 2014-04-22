var countDecorator = function(func) {
    var count = 0;
    console.log("counter in the outside function: " + count); 
    function change(val) {
        //count++;
        count = count + val;
        console.log("counter in the closure: " + count);
    }
    
    return change(2);
    
}
//console.log(countDecorator());
var first = countDecorator();
//console.log(first);
//item();
console.log('');

