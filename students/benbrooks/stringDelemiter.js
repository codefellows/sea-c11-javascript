function stringDelemiter(str, dlm) {

    // Define initial conditions
    var startingPos = 0;
    var results = [];
    var dlmPos = str.indexOf(dlm);

    //If there's no delemiter, return the string in an array
    if (dlmPos == -1) return [str];

    while (dlmPos > -1) {

        // Get the string between the starting position and the delemiter
        var subStr = str.substring(startingPos, dlmPos);
        results.push(subStr);

        // Updating starting position, find next delemiter
        startingPos = dlmPos + 1;
        dlmPos = str.indexOf(dlm, dlmPos + 1);

        // If there's no next delemeter, add the last substring
        if (dlmPos == -1) {
            var lastSubStr = str.substring(startingPos);
            results.push(lastSubStr);
        }

    }

    return results;

}