
//decorator assignment
// Had a tuff time figuring out this assignment

function countDecorator(infunction) {
    var count = 0;
    function internalCounter() {
        count++;
        return infunction.apply(this, arguments)
    }
    internalCounter.callCount = function() {
        return count;
    }
    return internalCounter;
}