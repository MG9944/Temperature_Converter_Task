import React from 'react';
import styled from 'styled-components';

//Small addition to the task
//This component is responsible for checking if water at a given temperature 
//(in units of celcius, fahrenheit and kelvin) boils


//The variable which has an assigned appearance is used when boiling water is being determined
const VerdictDescription = styled.p`
  color: ${props =>
    props.primary
      ? '#ba2525' // When the water temperature is high
      : props.secondary
      ? '#4c63b6' // When the water temperature is high
      : props.invalid
      ? '#d64545' //When the specified temperature is incorrect
      : '#1f2933'};
  font-size: 1.5rem;
  font-weight: 500;
  padding: 1.5rem;
  text-align: center;
`;

//Function to which we give a parameter responsible for checking the correctness of the temperature 
//and giving a verdict about the boiling of water
function BoilingVerdict(props) {
  
  //Checking if the given data is in the range of temperature units, if not
  if (props.celsius < -273.15 || props.fahrenheit < -459.67 || props.kelvin < 0) {
    return (
      // A variable is used where the appearance is assigned. 
      //For incorrect data, the appearance assigned under the *invalid* variable is used 
      <VerdictDescription invalid>
        This is an invalid temperature, try something higher.{' '}
        <span role="img" aria-label="Rocket">
          🚀
        </span>
      </VerdictDescription>
    );

    //If the temperature exceeds 100 degrees celcius it returns a message that the water is boiling
  } else if (props.celsius >= 100) {
    return (
      // The appearance for high temperature is used
      <VerdictDescription primary>
        Water would boil here, it will eventually be mist...{' '}
        <span role="img" aria-label="Steam">
          ♨️
        </span>
      </VerdictDescription>
    );

    //If the temperature is -273.15 degrees celcius then the information about the temperature of absolute zero is returned
  } else if (props.celsius === -273.15) {
    return <VerdictDescription>This is... absolute zero.</VerdictDescription>;

    //When the water temperature is below zero but not above -273 degrees, 
    //a message is returned that the water is starting to solidify
  } else if (props.celsius <= 0 && props.celsius > -273.15) {
    return (
      // The appearance for low temperature is used
      <VerdictDescription secondary>
        Water would freeze here, it will be ice-olated.{' '}
        <span role="img" aria-label="Snowflake">
          ❄️
        </span>
      </VerdictDescription>
    );
  }
  return null;
}
//A module is a self contained unit that can expose assets to other modules using export
export default BoilingVerdict;
