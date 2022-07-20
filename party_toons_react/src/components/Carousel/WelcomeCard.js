import { Container } from "@mui/system";
import React from "react";
import styled from "styled-components";

function WelcomeCard() {
  return (
    <Container>
      <WelcomeCard1>
        <h2>Welcome</h2>
        <h4>
          Choose from our many rental options for your special day with that
          special someone.
        </h4>
        <div id="get-location-button">Get location</div>
      </WelcomeCard1>
      <WelcomeCard2>
        <h2>welcome 2</h2>
      </WelcomeCard2>
      <WelcomeCard3>
        <h2>welcome 3</h2>
      </WelcomeCard3>
    </Container>
  );
}

export default WelcomeCard;


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