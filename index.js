/*function returnFirstTwoDrivers(selectingDrivers) {
    return selectingDrivers.slice(0 , 2)
}

function returnLastTwoDrivers(selectingDrivers) {
    return selectingDrivers.slice(2 , 4)
}*/

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2)
} 

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2, 4)
} 

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers ];


function createFareMultiplier(int) {
    return function(fare) {
       return  fare * int
    }
}

const fareDoubler = createFareMultiplier => createFareMultiplier * 2;

const fareTripler = createFareMultiplier => createFareMultiplier * 3;

function selectDifferentDrivers(drivers, selectingDrivers ) {
    return selectingDrivers(drivers);

}
