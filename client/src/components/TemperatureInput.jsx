import React from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper';

//Label variable to which is assigned an appearance for the text that is placed above the place for entering temperature
const Label = styled.label`
  color: #52606d;
  font-size: 1.2rem;
`;
//The Input variable to which the appearance for the field that is used to enter the temperature is assigned, is located under the title space, 
const Input = styled.input`
  background-color: ${props => (props.invalid ? '#facdcd' : 'none')};
  border: 3px solid #cbd2d9;
  border-radius: 10px;
  color: #52606d;
  font-size: 2rem;
  width: 300px;
  height: 80px;
  text-align: center;

  &:focus {
    box-shadow: ${props => (props.invalid ? '0 0 5px #ba2525' : '0 0 5px #19216c')};
    border-radius: 10px;
    padding: 3px 0px 3px 3px;
    outline: none;
    border: ${props => (props.invalid ? '3px solid #ba2525' : '3px solid #19216c')};
  }
`;

//The setScale variables, in which names are assigned to abbreviations of temperature units  
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
  k: 'Kelvin'
};


//Function to enter temperature
function TemperatureInput(props) {
  function handleChange(e) {
    props.onTemperatureChange(e.target.value);
  }

  const temperature = props.temperature; //variable for temperature
  const scale = props.scale; //variable for scale
  const onKeyDown = props.onKeyDown; //variable for allowed characters
  const invalid = props.invalid; //variable for unacceptable values for a given temperature unit

  //Return component appearance for data entry, constructor created, giving data entry data
  return (
    <Wrapper>
      <Label htmlFor={scaleNames[scale].toLowerCase()}>
        Temperature in {scaleNames[scale]} ({scale !== 'k' && <span>°</span>}
        {scale.toUpperCase()}):
      </Label>
      <Input
        id={scaleNames[scale].toLowerCase()}
        type="number"
        name={scaleNames[scale].toLowerCase()}
        value={temperature}
        onChange={handleChange}
        onKeyDown={onKeyDown}
        invalid={invalid}
      />
    </Wrapper>
  );
}
//A module is a self contained unit that can expose assets to other modules using export
export default TemperatureInput;
