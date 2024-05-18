let numbers=[1,2,3,4,5,6,7,8,9,10];
let strings=["Oswald", "James", "Samuel", "Felicity", "Boby", "Joe", "terrence", "Pobee", "Akoto", "Hesper"];
function processArray(numbers){
return numbers.map(num => {
if(num % 2===0){
    return num*num;
}

else{
    return num*3;
}
});
}

let processedNumbers = processArray(numbers);

function formatArrayStrings(strings,processedNumbers){
return strings.map((str,index)=>{
    let num=processedNumbers[index]
if(num %2===0){
 return str.toUpperCase();
}
else{
    return str.toLowerCase();
}
});
}
module.exports = { processArray, formatArrayStrings };