function oldestLivingFather(people) {
var kids = [];
var dads = [];
var oldManAge = 0;
for (i = 0; i < people.length; i++) {
    if (people[i].father !== undefined) {
        for (j = 0; j < people.length; j++) {
            if (people[i].father === people[j].name) {
                if (people[j].age > oldManAge) {
                    oldManAge = people[j].age;
                    dads.push(people[i].father);
                }
            }
        }
    } 
    return dads[0];
}
}

var dads = oldestLivingFather (people);
console.log(dads);