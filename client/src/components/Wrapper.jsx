import styled from 'styled-components';

//Assign the appearance and arrangement of elements on a page to a Wrapper variable. 
//Component used in other components
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
`;
//A module is a self contained unit that can expose assets to other modules using export
export default Wrapper;
