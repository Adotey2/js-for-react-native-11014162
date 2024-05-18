const { processArray, formatArrayStrings } = require('./arrayManipulation');
let names = ["Oswald", "James", "Samuel", "Felicity", "Boby", "Joe", "terrence", "Pobee", "Akoto", "Hesper"];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let processedNumbers = processArray(numbers);

let modifiedNames = formatArrayStrings(names, processedNumbers);

function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => {
        return {
            id: index + 1,
            originalName: name,
            modifiedName: modifiedNames[index]
        };
    });
}

let userProfiles = createUserProfiles(names, modifiedNames);
console.log('User Profiles:', userProfiles);

module.exports = { createUserProfiles };