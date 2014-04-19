function Add(x, y) {
    console.log((x + y));
}

function countDecorator(fn) {
    var n = 1;
    return function () {
        console.log(n++);
    };
}

var addCallCount = countDecorator();

Add(1, 1);

addCallCount();

Add(2, 2);

addCallCount();