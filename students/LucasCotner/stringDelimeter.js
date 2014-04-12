var stringDelimeter = function (input,seperator) {
    var strings = [];
    var item2 = '';
    for (i = 0; i < input.length; i++) {
        var item = input[i];
        if (item != seperator) {
            item2 = item2.concat(item);
        } else {
            strings.push(item2);
            item2 = '';
        }
        if ((i == input.length - 1) && item != seperator) {
            strings.push(item2);
        }
    }
    return strings;
};

