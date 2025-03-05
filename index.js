// Code your solution in this file!
// Return the first two drivers from an array (non-destructive)
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // Return the last two drivers from an array (non-destructive)
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // Array containing both functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Function that creates a multiplier function
  const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  };
  
  // Fare doubler function
  const fareDoubler = createFareMultiplier(2);
  
  // Fare tripler function
  const fareTripler = createFareMultiplier(3);
  
  // Function that selects different drivers based on the function passed
  const selectDifferentDrivers = function(arrayOfDrivers, driverFunction) {
    return driverFunction(arrayOfDrivers);
};