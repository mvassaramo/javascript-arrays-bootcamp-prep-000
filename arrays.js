var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(chocolateBars, Mars) {
         return [Mars, ...chocolateBars];
}

function destructivelyAddElementTobeginningOfArray(chocolateBars, Mars) {
        chocolateBars.unshift(Mars);
        return chocolateBars;
}

function addElementToEndOfArray(chocolateBars,Lindt) {
  return [...chocolatebars, "Lindt"]
}


function destructivelyAddElementToEndOfArray(chocolatebars,Twix) {
  return chocolatebars.push("Twix");
}

function accessElementInArray() {
  return (access[1]);
}

function destructivelyRemoveElementFromBeginningOfArray(chocolatebars) = chocolatebars.shift() {
  return chocolatebars
}
 function removeElementFromBeginningOfArray(chocolatebars) {
 return chocolatebars.slice(1);
 }
