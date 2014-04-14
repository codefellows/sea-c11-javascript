var stringDelimeter = function (input,seperator) {
    var strings = [];
    while(input) {
        var sepPosition = input.indexOf(seperator);   
        if (sepPosition === -1) {
            sepPosition = input.length;
        }       
        var subString = input.substring(0,sepPosition);              
        strings.push(subString);      
        input = input.substring(sepPosition + 1);
    }
    return strings;
};