// ------------------------- Importations!!! ----------------------------\\

import React from 'react' ;
import styled from 'styled-components';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const Welcome = () => {

  return (
    // ------------------------- Jsx!!! ----------------------------\\

    <Container>
      <RightChevron>
        <ChevronRightIcon fontSize='100%' />
      </RightChevron>
      <LeftChevron>
        <ChevronLeftIcon  fontSize='100%'/>
      </LeftChevron>
      <OversizeCardHolder>
        
        <WelcomeCard1>
          <h2>Welcome</h2>
          <h4>Choose from our many rental options for your special day with that special someone.</h4>
          <div id='get-location-button'>Get location</div>
        </WelcomeCard1>
        <WelcomeCard2>
          <h2>welcome 2</h2>
        </WelcomeCard2>
        <WelcomeCard3>
          <h2>welcome 3</h2>
        </WelcomeCard3>
        
      </OversizeCardHolder> 
      <ScrollBox>
          <ScrollBar className='selected'/>
          <ScrollBar id='second-bar'/>
          <ScrollBar/>
        </ScrollBox>
    </Container>
  )
} ;

export default Welcome ;

// ------------------------- Styled Components!!! ----------------------------\\

const OversizeCardHolder = styled.div `
  width: 300%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items:center;
  overflow: hidden;

  

`



const Container = styled.div `
  width: 100%;
  height: 665px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  background-color: #CECDCD;
  
`

const WelcomeCard1 = styled.div`
  width: 570px;
  height: 362px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    font-weight: 300;
    width: 70%;
    padding: 3em 0;
    text-align: center;
  }

  #get-location-button {
    color: white;
    background-color: #3d3d3d;
    padding: 1em 2em;
    font-size: 12px;
    border-radius: 4px;
    cursor: pointer;
  }
`



const WelcomeCard2 = styled(WelcomeCard1)`

`


const WelcomeCard3 = styled(WelcomeCard1)`
`


const ScrollBox = styled.div`
  display: flex;
  width: 100%;
  height: 5px;
  justify-content: center;
  position: absolute;
  bottom: 0;
  margin-bottom: 3em;

  #second-bar {
    margin: 0 10px;

  }

  .selected {
    background-color: #292929;
  }
`

const ScrollBar = styled.div`
  display: flex;
  width: 30px;
  height: 5px;
  background-color: #858585;
  border-radius: 5px;
`

const RightChevron = styled.div `
  right: 15px;
  align-self: center;
  position: absolute;
  fill: #a9a7a7;
  font-size: 70px;

  :hover {
    cursor: pointer;
  }
`

const LeftChevron = styled.div`
  left: 15px;
  align-self: center;
  position: absolute;
  color: #7a7a7a;
  font-size: 70px;

  
  :hover {
    cursor: pointer;
  }
`

