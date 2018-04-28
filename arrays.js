var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(chocolateBars, mars) {
         return [mars, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, mars) {
        chocolateBars.unshift(mars);
        return chocolateBars;
}

function addElementToEndOfArray(chocolateBars,lindt) {
  return [...chocolateBars, "lindt"]
}


function destructivelyAddElementToEndOfArray(chocolatebars,Twix) {
  return chocolatebars.push("Twix");
}

function accessElementInArray(array,index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolatebars) {
chocolatebars.shift() 
  return chocolatebars
}
 function removeElementFromBeginningOfArray(chocolatebars) {
 return chocolatebars.slice(1);
 }
