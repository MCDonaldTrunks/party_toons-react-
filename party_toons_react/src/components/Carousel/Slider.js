import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React from "react";
import Slider from "react-slick";
import WelcomeCard from './WelcomeCard'
import styled from "styled-components";


export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <CardContainer>
        <WelcomeCard1>
          <h2>Welcome</h2>
          <h4>
            Choose from our many rental options for your special day with that
            special someone.
          </h4>
          <div id="get-location-button">Get location</div>
        </WelcomeCard1>
      </CardContainer>
      <CardContainer>
        <WelcomeCard2>
          <h2>welcome 2</h2>
        </WelcomeCard2>
      </CardContainer> 
      <CardContainer>
        <WelcomeCard3>
          <h2>welcome 3</h2>
        </WelcomeCard3>
      </CardContainer>
    </Slider>
  );
}

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 665px;
`


const WelcomeCard1 = styled.div`
  width: 570px;
  height: 362px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto auto;

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
 