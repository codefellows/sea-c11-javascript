function countDecorator(fn) {

    function countInjector() {

        // Increment call count
        countInjector.callCount++;

        // Return original function value
        return fn.apply(null, arguments);
    }

    // Set initial call count
    countInjector.callCount = 0;
    return countInjector;

}

// Implement a decorator function that takes 
// a function as an argument and will track
// how many times the passed function was called.

function Add(x, y) {
    return x + y;
}

var addAndCountCalls = countDecorator(Add);

console.log(addAndCountCalls(1, 1));
// -> 2 Dont pay attention to this number. The important part is we called the `Add` function once.
console.log(addAndCountCalls.callCount);
// -> 1

console.log(addAndCountCalls(2, 2));
// -> 4 Dont pay attention to this number either. The important part is we called the `Add` function again.
console.log(addAndCountCalls.callCount);
// -> 2