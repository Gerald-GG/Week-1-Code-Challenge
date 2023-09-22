//function calculates and prints demerit points
function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemrit = 5;

    //compare car's speed with the speedlimit
    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        //Calculate demerit points based on excess speed
        const demeritPoints = Math.floor((speed - speedLimit) /kmPerDemrit);

        //Check if demerit points are within the range and print an outcome of points the driver has earned.
        if (demeritPoints <= 12) {
            console.log(`Points: ${demeritPoints}`);
        // If demerit points exceed 12 , return an outcome of "License suspend"
        } else {
            console.log("License suspended");
        }
    }
}

//An example of speed 
const carSpeed = 110;
calculateDemeritPoints(carSpeed);



