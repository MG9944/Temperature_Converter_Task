import React from 'react';
import styled from 'styled-components';
import Calculator from './Calculator';
import Wrapper from './Wrapper';

//Assigning an appearance for the variable "Title"
const Title = styled.h1`
  color: #f35627;
  font-size: 2rem;
  line-height: 1.1;
  margin: 2rem;
  text-align: center;
`;


//The main converter component, the use of the component with the arrangement of elements on the page, the calculator and the previous variable with the assignment of the appearance for the title 
function Converter() {
  return (
    <Wrapper>
      <Title>
        <span role="img" aria-label="Thermometer">
          🌡️
        </span>{' '}
        Temperature Converter
      </Title>
      <Calculator />
    </Wrapper>
  );
}
//A module is a self contained unit that can expose assets to other modules using export
export default Converter;
