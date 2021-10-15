// DEFINE YOUR FUNCTION BELOW:
function capitalize(string) {
    let newString = string.slice(0, 1).toUpperCase();
    newString = newString + string.slice(1);
    return newString;
}