let myFavGOTChar = "Arya Stark"
function checkMyFavChar() {
    if (myFavGOTChar == "Tyrion Lannister") {
        alert("So you drink and know things...");
    } else 
    if (myFavGOTChar == "Jon Snow") {
        alert("You know nothing...");
    } else {
        alert("I guess " + myFavGOTChar + " will do...");
    }
    return myFavGOTChar;
}
console.log(checkMyFavChar(myFavGOTChar));
