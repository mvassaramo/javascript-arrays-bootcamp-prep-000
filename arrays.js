var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(chocolateBars, mars) {
         return [mars, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, mars) {
        chocolateBars.unshift(mars);
        return chocolateBars;
}

function addElementToEndOfArray(chocolateBars,finalelement) {
  return [...chocolateBars,finalelement]
}


function destructivelyAddElementToEndOfArray(chocolateBars,finalelement) {
  return chocolateBars.push(finalelement);
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
