function trafficSimulation(road, timeUnits) {
    let states = [road];
    const lightCycle = ['G', 'O', 'R'];
  
    // Helper function to update the traffic lights
    function updateTrafficLights(road) {
      return road.split('').map(char => {
        if (!['G', 'O', 'R'].includes(char)) return char;
        let currentIndex = lightCycle.indexOf(char);
        let nextIndex = (currentIndex + 1) % lightCycle.length;
        return lightCycle[nextIndex];
      }).join('');
    }
  
    // Helper function to move cars
    function moveCars(road) {
      let newRoad = road.split('');
      for (let i = 0; i < newRoad.length - 1; i++) {
        if (newRoad[i] === 'C' && !['C', 'R'].includes(newRoad[i + 1])) {
          if (newRoad[i + 1] === 'O' && (i + 2 < newRoad.length && newRoad[i + 2] === 'C')) {
            // prevents the car from moving if there is orange light ahead and a car right after it
          } else {
            newRoad[i] = '.';
            newRoad[i + 1] = 'C';
            i++; // Skip next character to avoid double moving
          }
        }
      }
      return newRoad.join('');
    }
  
    // Main simulation loop
    for (let time = 0; time < timeUnits; time++) {
      let currentRoad = states[states.length - 1];
      let updatedLights = updateTrafficLights(currentRoad);
      let movedCars = moveCars(updatedLights);
      states.push(movedCars);
    }
  
    return states;
  }

// change the n variable value to see different results

const initialRoad = "CCC.G...R...";
const n = 10;
console.log(trafficSimulation(initialRoad, n));

module.exports = trafficSimulation