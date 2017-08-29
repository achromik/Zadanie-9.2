// arrays of names
var maleNames   = ['Mark', 'Anton', 'Jack', 'Igor'], 
    femaleNames = ['Anna', 'Taylor', 'Eva', 'Lisa', 'Sara'];

//array of concatenated arrays male's and female's names    
var allNames = maleNames.concat(femaleNames);   

//name to add to array of all names
var addName = 'Marek';

//checking if selected name in variable 'addName' exist in array. Method indexOF() returns -1 when searched name never ocurs 
if(allNames.indexOf(addName) === -1) {     // ?? if(allNames.indexOf(addName) == -1) ?? 

    // push selected name to end of array
    allNames.push(addName);
}


