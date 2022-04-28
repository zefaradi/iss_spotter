// index.js
const {fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation} = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});


fetchCoordsByIP('162.245.144.188', (error, coordinates) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned coordinates:' , coordinates);
});


const exampleCoordinates = {latitude: '49.27670', longitude: '-123.13000'};

fetchISSFlyIverTimes(exampleCoordinates, (error, passTime) => {
  if (error) {
  console.log("It didn't work!" , error);
  return;
  }

  console.log('It worked! Returned flyover times:' , passTime)
});

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTime) => {
  if (error) {
    return console.log("It didn't work!" , error);
  }
  // success, print out the deets!
  printPassTimes(passTime);
});