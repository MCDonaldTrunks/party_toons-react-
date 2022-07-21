import React from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";

function ImageSliderContainer() {
  return (
    <Container>
      <h2>Low price rentals, Call us now!</h2>
      <SubHeader>
        We are interested in individualities and the possibility of creating
        unforgettable moments — that’s what makes our work so exciting
      </SubHeader>
      <ImageSlider >
        
        

      </ImageSlider>
    </Container>
  );
}

export default ImageSlider;

const SubHeader = styled.span`
  font-size: 18px;
  text-align: center;
`;

const Container = styled.div`
  background-color: white;
  width: 100%;
  height: 1208px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;


