function countDecorator() {
    var n = 1;
    return {
        count: function () {
            console.log(n++)
        },

        add: function Add(x, y) {
            console.log((x + y))
        },

    };
}

var addCallCount = countDecorator();

addCallCount.add(1, 1);
addCallCount.count();
addCallCount.add(1, 2);
addCallCount.count();