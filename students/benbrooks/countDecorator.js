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