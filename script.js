//variables for functions to be used on
let food = "posole ";
let word = "is gas"

//function itself 
charAt(0, "yessir");
//function name
function charAt(index, word){
    for (let i = 0; i < word.length; i++){
        //if statment to see if answer correct
        if (i === index){
            //return answer
            return word[i];

        }
        
    }
}
//function itself with variable to store data after returning it
let piece = slice(0,2, "yee");

///function name 
function slice(start,end,word){
    //variable to store function
    let piece = "";
    //for loop
    for(let i = start; i < end; i++) {
        // add each character to the peice variable 
        piece += charAt(i,word);
    }
    //return the string
    return piece;

}

//function name
function replace(oldChar, newChar){
//variable to store function
let index = -1
//for loop
    for(let i = 0; i < food.length; i++){
        //if statment find old character, store index and leave the loop
        if(food[i] === oldChar){
            index = i;
            break;
        }
    }
//variable to store function
let newString = "";
    //for loop 
    for(let i = 0; i < food.length; i++){
        //if statement, if index is the same as oldChar add newChar to newString
        if (i === index){
            newString += newChar;
        }
        //if else statement 
        else{
            //add original character to newString
            newString += food[i];
        }
    }
    //return the newString
    return newString;
}


//function name
function replaceAll(oldChar, newChar){
    //variable to store function
    let newString = "";
    //for loop
    for (let i = 0; i < food.length; i++){
        //checl if the curretn character matches the old character
        if(food[i] === oldChar){
            // add the new character to newString
            newString = newChar;
            return
        }
        // if else statement 
        else{
            //add original character to newString
            newString += food[i];
        }
    }
    //return the newString
    return newString;
}

//function name
function concat (food, word){
    //for loop
    for (let i = 0; i < word.length; i++){
        //add each character from "word" to "food"
        food += word [i];
    }
    //return the string
    return food
}
//console.log function
console.log (concat(food, word))