var countDecorator = function(func) {
    var count = 0;
    console.log("counter in the outside function: " + count); 
    function change() {
        count++;
        //count = count + val;
        console.log("counter in the closure: " + count);
        return count;
    }
    change();
    console.log(count);
    
}
//console.log(countDecorator());
var first = countDecorator();
//console.log(first);
//item();
console.log('');

