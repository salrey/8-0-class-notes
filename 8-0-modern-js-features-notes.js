//Modern Js Features Lesson Notes 
//August 30, 2021

const planet = {
    name: "Mercury",
    orbitalPeriodInDays: 88,
    radiusInMiles: 1516,
  };

  //Destructuring Arrays - order matters
const planets = ["Mercury", "Venus", "Earth", "Mars"];

const [first, second, third] = planets;

console.log(first); //> "Mercury"

  //Destructuring Objects - variable names matters and you lose name customization
  //variables with similar keys will be overwritten by the last one that's similar key
const { name, orbitalPeriodInDays } = planet
console.log(name) //> "Mercury"

  //Destructuring Function parameters 
  function planetRadiusInKilometers(planet) {
    const radiusInMiles = planet.radiusInMiles;
    return radiusInMiles * 1.609;
  }
  //Can turn into:

  function planetRadiusInKilometers({ radiusInMiles }) {
    return radiusInMiles * 1.609;
  }
    
  console.log(planetRadiusInKilometers(planet)); //> 2439.244
  
   
  const [first, ...others] = planets;

  console.log(others); //> ['Venus', 'Earth', 'Mars']

  //Use spread operator to skip around elements in an array 
  const[first, second,, ...others] = planets   //should skip earth

  console.log([first, second,, ...others]);

const mission = {
    name: "Magellan",
    dates: {
      start: "May 4th, 1989",
      end: "October 13th, 1994",
    },
    successful: true,
  };

  function createMission(name, start, end = null, successful = false) {
    return {
      name,
      dates: { start, end },
      successful,
    };
  }

