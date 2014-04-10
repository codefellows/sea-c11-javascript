var preferredName = function (firstName, lastName) {
    console.log("firstName = " + firstName);
    console.log("lastName = " + lastName);
    var name1, name2;
    if (firstName === 'Lucas') {
        name1 = true;
    } else {
        name1 = false;
    }
    if (lastName === 'Cotner') {
        name2 = true;
    } else {
        name2 = false;
    }
    var message = ((name1 === true && name2 === true) ? "false" : (name1 === false && name2 === false) ? "false" : (name1 === true && name2 === false) ? "Lucas" : (name1 === false && name2 === true) ? "Cotner" : "Error!");

    console.log(message);
    /*if (name1 === true && name2 === true) {
        console.log("false");
        return false;
    } else if (name1 === false && name2 === false) {
        console.log("false");
        return false;
    } else if (name1 === true && name2 === false) {
        console.log("Lucas");
        return "Lucas";
    } else if (name1 === false && name2 === true) {
        console.log("Cotner");
        return "Cotner";
    } */
};
console.log('');
preferredName('', '');