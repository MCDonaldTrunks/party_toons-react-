import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React from "react";
import Slider from "react-slick";
import styled from "styled-components";


export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    className: 'Welcome'
  };
  return (
    <Slider {...settings} >
      <CardContainer className="card-container">
        <Soultaker>
          <WelcomeCard1>
            <h2>Welcome</h2>
            <h4>
              Choose from our many rental options for your special day with that
              special someone.
            </h4>
            <div id="get-location-button">Get location</div>
          </WelcomeCard1>
        </Soultaker>

      </CardContainer>
      <CardContainer>
        <Soultaker>
          <WelcomeCard2>
            <h2>welcome 2</h2>
          </WelcomeCard2>
        </Soultaker>
      </CardContainer>
      <CardContainer>
        <Soultaker>
          <WelcomeCard3>
            <h2>welcome 3</h2>
          </WelcomeCard3>
        </Soultaker>
      </CardContainer>

    </Slider>
  );
}

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 665px;
`

const Soultaker = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;

`

const WelcomeCard1 = styled.div`
  width: 570px;
  height: 362px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;

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
