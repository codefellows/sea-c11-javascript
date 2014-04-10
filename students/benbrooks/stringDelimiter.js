function stringDelimiter(str, dlm) {
    var dlmPos, subStr,
    results = [];

    while (str) {
        // Get the position of the delimiter
        dlmPos = str.indexOf(dlm);

        // If there is no delimiter, set position to end of string
        if (dlmPos == -1) dlmPos = str.length;

        // Get the substring from the beginning to the delimiter position
        subStr = str.substring(0, dlmPos);

        // Add it to our array of substrings
        results.push(subStr);

        // Remove the substring from the original str
        str = str.substring(dlmPos + 1);
    }

    return results;
}