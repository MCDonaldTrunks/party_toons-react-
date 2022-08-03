import React from 'react'
import styled from 'styled-components'

function Workshop() {
  return (
    <Container>
      <h2>Workshop</h2>
      <SubContainer>
        <LeftSide>
          <h3>You are warmly invited to our workshop</h3>
          <p>We will be glad to serve you at our premises and show you our latest collections. You will see the process of planning events and try to do it yourself.
            Feel free to discuss with our teamwork the possibility of creating your own designs for special occasions.</p>
            <AppointmentButton/>


        </LeftSide>
        <RightSide>
          <img src="" alt="" ></img>
        </RightSide>
      </SubContainer>
    </Container>
  )
}

export default Workshop;

const Container = styled.div`
  width: 100%;
  height: 838px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    font-size: 32px;
    font-weight: 400;
    padding-bottom: 2em;
  }
`
const SubContainer = styled.div`
  width: 1170px;
  height: 518px;
  background-color: white;
  padding: 4em 5em;
`

const LeftSide = styled.div`
  display: flex;
  width: 345px;
  height: 338px;
  flex-direction: column;
`
const RightSide = styled(LeftSide)`
  
`

const AppointmentButton = styled.div`
  content: Make Appointment;
`