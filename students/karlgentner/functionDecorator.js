//Karl Gentner - CFF2 Javascript - functionDecorator function - 4/21/2014
// This method accepts a function as an argument and tracks how many times the function was called.
//** based on concepts found in Javascript Decorator Tutorial @ http://javascript.info/tutorial/decorators

function countDecorator(func) {
    var counter = 0;
    function wrapper() {
        counter += 1; //increment counter by 1 each time
        return func.apply(this, arguments);
    }
    wrapper.callCount = function () {
        return counter;
    };
    return wrapper;
}

