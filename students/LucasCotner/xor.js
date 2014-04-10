var preferredName = function (firstName, lastName) {
    return !!firstName && !!lastName ? false : !!firstName ? firstName : !!lastName ? lastName : false;  
};
