import React from 'react' ;
import styled from 'styled-components';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Welcome = () => {
  return (
    <Container>
      <RightChevron>
        <ChevronRightIcon fontSize='large' />
      </RightChevron>
      <LeftChevron>
        <ChevronLeftIcon fontSize='large' />
      </LeftChevron>
      <WelcomeCard1>
        <h2>Welcome</h2>
      </WelcomeCard1>
      <WelcomeCard2>
      </WelcomeCard2>
      <WelcomeCard3>
      </WelcomeCard3>
      <ScrollBox>
        <ScrollBar className='selected'/>
        <ScrollBar id='second-bar'/>
        <ScrollBar/>
      </ScrollBox>
    </Container>
  )
} ;

export default Welcome ;

const Container = styled.div `
  width: 100%;
  height: 719px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`

const WelcomeCard1 = styled.div`
  width: 570px;
  height: 362px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`



const WelcomeCard2 = styled.div``


const WelcomeCard3 = styled.div``


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
    background-color: #4a4a4a;
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
  right: 7px;
  align-self: center;
  position: absolute;
  fill: gray;
`

const LeftChevron = styled.div `
  left: 7px;
  align-self: center;
  position: absolute;
  fill: gray;
`

