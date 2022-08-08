import React from "react";
import styled from "styled-components";

function Workshop() {
  return (
    <Container>
      <h2>Workshop</h2>
      <SubContainer>
        <LeftSide>
          <h3>You are warmly invited to <br>
          </br>our workshop</h3>
          <p>
            We will be glad to serve you at our <br></br>premises and show you our latest<br></br>
            collections. You will see the process of <br></br>planning events and try to
            do it yourself.<br></br> Feel free to discuss with our teamwork the<br></br>
            possibility of creating your own designs for <br></br>special occasions.
          </p>
          <Appointment>
            Make Appointment
          </Appointment>
        </LeftSide>
        <RightSide>
          <img
            src="https://previews.123rf.com/images/gong2533/gong25331604/gong2533160400715/55851597-vector-workshop-concept-template.jpg"
            alt=""
          ></img>
        </RightSide>
      </SubContainer>
    </Container>
  );
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
`;
const SubContainer = styled.div`
  display: flex;
  width: 1170px;
  height: 518px;
  background-color: white;
  padding: 4em 5em;
  justify-content: center;
  align-items: center;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  height: 96%;
  width: 50%;
  padding: 1em 2em 1em 4.5em ;
  justify-content: space-between;

  p {
    line-height: 1.5;
  }
  

  
  h3 {
    font-size: 24px;
    font-weight: 400;
    line-height: 1.4;
  }

  
`;

const RightSide = styled.div`
  overflow: hidden;
  width: 505px;
  height: 428px;

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;

const Appointment = styled.div`
  display: flex;
  padding: .7em 1.7em;
  background-color: #383838;
  color: white;
  font-size: 14px;
  border-radius: 5px;
  width: fit-content;
`;
