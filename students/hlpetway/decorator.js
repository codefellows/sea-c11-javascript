function countDecorator(fn) {
    var counter = 0;

    function wrapper() {
        counter++;
        return fn.apply(this, arguments);
    }

    wrapper.callCount = function () {
        return counter;
    };
    return wrapper;
