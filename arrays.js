var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(chocolateBars, mars) {
         return [mars, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, mars) {
        chocolateBars.unshift(mars);
        return chocolateBars;
}

function addElementToEndOfArray(chocolateBars,Lindt) {
  return [...chocolateBars, "Lindt"]
}


function destructivelyAddElementToEndOfArray(chocolatebars,Twix) {
  return chocolatebars.push("Twix");
}

function accessElementInArray(array,index) {
  return (access[1]);
}

function destructivelyRemoveElementFromBeginningOfArray(chocolatebars) {
chocolatebars.shift() 
  return chocolatebars
}
 function removeElementFromBeginningOfArray(chocolatebars) {
 return chocolatebars.slice(1);
 }
