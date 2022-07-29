import React from "react";
import styled from "styled-components";
import { productImages } from "./assets/productImages";
import SwiperComponent from "./SwiperComponent";

function ImageSliderContainer() {
  return (
    <Container>
      <h2>Low price rentals, Call us now!</h2>
      <SubHeader>
        We are interested in individualities and the possibility of creating
        unforgettable moments — that’s what makes our work so exciting
      </SubHeader>
      <SwiperComponent images={productImages}></SwiperComponent>
    </Container>
  );
}

export default ImageSliderContainer;

const SubHeader = styled.span`
  font-size: 18px;
  text-align: center;
  width: 40vw;
  line-height: 1.8;
`;

const Container = styled.div`
  background-color: white;
  width: 100%;
  height: 1208px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  
  h2 {
    margin-top: 50px;
  }
`;


