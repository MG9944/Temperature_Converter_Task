import React, { useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';
import Wrapper from './Wrapper';

//Function with formula to convert Fahrenheit to Celcius
function toCelsiusWithFahrenheit(fahrenheit) {
  if (fahrenheit < -459.68) return '.';
  return ((fahrenheit - 32) * 5) / 9;
}
//Function with formula to convert Kelvin to Celcius
function toCelsiusWithKelvin(kelvin) {
  if (kelvin < 0) return '.';
  return kelvin - 273.15;
}
//Function with formula to convert Celcius to Fahrenheit
function toFahrenheitWithCelsius(celsius) {
  if (celsius < -273.15) return '.';
  return (celsius * 9) / 5 + 32;
}
//Function with formula to convert Kelvin to Fahrenheit
function toFahrenheitWithKelvin(kelvin) {
  if (kelvin < 0) return '.';
  return (kelvin - 273.15) * (9 / 5) + 32;
}
//Function with formula to convert Celcius to Kelvin
function toKelvinWithCelsius(celsius) {
  if (celsius < -273.15) return '.';
  return celsius + 273.15;
}
//Function with formula to convert Fahrenheit to Kelvin
function toKelvinWithFahrenheit(fahrenheit) {
  if (fahrenheit < -459.68) return '.';
  return (fahrenheit + 459.67) * (5 / 9);
}

//Function to convert temperature between units. 
//If the value is out of range then other fields take the value isNan
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  //Variable to with function to round numbers
  const rounded = Math.round(output * 1000) / 1000;
  //Variable on with string conversion function
  return rounded.toString();
}

//The main function of the converter in which the conversions of the given temperature in C, F and K units take place
function Calculator() {
    //Declare a new state variable, which we'll call "scale"
  const [scale, setScale] = useState('c');
    //Declare a new state variable, which we'll call "count"
  const [temperature, setTemperature] = useState('');

  
  //Function with "temperature" parameter for celcius conversion. Appropriate scale and temperature is set
  const handleCelsiusChange = (temperature) => {
    setScale('c');
    setTemperature(temperature);
  }
  //Function with "temperature" parameter for fahrenheit conversion. Appropriate scale and temperature is set
  const handleFahrenheitChange = (temperature) => {
    setScale('f');
    setTemperature(temperature);
  }
  //Function with "temperature" parameter for kelvin conversion. Appropriate scale and temperature is set
  const handleKelvinChange = (temperature) => {
    setScale('k');
    setTemperature(temperature);
  }

  //For Celcius
  const celsius =
  //If the scale is Fahrenheit, a function is called to convert it to Celsius with the given temperature taken first 
    scale === 'f'
      ? tryConvert(temperature, toCelsiusWithFahrenheit)
      //If the scale is Kelvin, a function is called to convert it to Celsius with the given temperature taken first 
      : scale === 'k'
      ? tryConvert(temperature, toCelsiusWithKelvin)
      //returning the temperature that was changed
      : temperature;
  
  //For Fahrenheit
  const fahrenheit =
  //If the scale is Celcius, a function is called to convert it to Fahrenheit with the given temperature taken first 
    scale === 'c'
      ? tryConvert(temperature, toFahrenheitWithCelsius)
      //If the scale is Kelvin, a function is called to convert it to Fahrenheit with the given temperature taken first 
      : scale === 'k'
      ? tryConvert(temperature, toFahrenheitWithKelvin)
      //returning the temperature that was changed
      : temperature;
  //For Kelvin
  const kelvin =
  //If the scale is Celcius, a function is called to convert it to Kelvin with the given temperature taken first
    scale === 'c'
      ? tryConvert(temperature, toKelvinWithCelsius)
      //If the scale is Fahrenheit, a function is called to convert it to Kelvin with the given temperature taken first 
      : scale === 'f'
      ? tryConvert(temperature, toKelvinWithFahrenheit)
      //returning the temperature that was changed
      : temperature;

      //Variable to save the swapped temperatures to the database. 
      //It uses the post method from the Axios client, connects to the server application which is responsible for managing the database
  const saveConvert = () => {
    axios
      .post("http://localhost:8080/api/convert", {
        celsius,
        fahrenheit,
        kelvin,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err.response));
  }
//The appearance of the component is returned
//TemperatureInput component for data input and constructor for each temperature unit
//Button to save data, go to history and write out the verdict about what happens to the water at a given temperature
  return (
    <Wrapper>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
        onKeyDown={e => e.keyCode === 69 && e.preventDefault()}
        invalid={celsius < -273.15}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
        onKeyDown={e => e.keyCode === 69 && e.preventDefault()}
        invalid={fahrenheit < -459.67}
      />
      <TemperatureInput
        scale="k"
        temperature={kelvin}
        onTemperatureChange={handleKelvinChange}
        onKeyDown={e => e.keyCode === 69 && e.preventDefault()}
        invalid={kelvin < 0}
      />
    <button onClick={saveConvert}>Convert</button>
    <Link to="/history">Go to history</Link>
      <BoilingVerdict
        celsius={parseFloat(celsius)}
        fahrenheit={parseFloat(fahrenheit)}
        kelvin={parseFloat(kelvin)}
      />
    </Wrapper>
  );
}
//A module is a self contained unit that can expose assets to other modules using export
export default Calculator;
