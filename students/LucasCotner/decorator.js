var countDecorator = function(item) {
    var count = 0;
    console.log(count); 
    function item() {
        count++;
        console.log(count);
    }
}

countDecorator();
item();
console.log('');
console.log('');
