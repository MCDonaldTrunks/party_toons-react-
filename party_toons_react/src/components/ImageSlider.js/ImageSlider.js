
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from 'styled-components'


export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <SliderContainer>
        <Slider {...settings}>
            <ImageContainer>
            <SlidedImage src="https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png" alt="img cant be found"/>
            </ImageContainer>
            <ImageContainer>
            
            </ImageContainer>
            <ImageContainer>
            
            </ImageContainer>
            <ImageContainer>
            
            </ImageContainer>
            <ImageContainer>
            
            </ImageContainer>
        
        </Slider>
    </SliderContainer>
  );
}


const ImageContainer = styled.div`
  width: 1060px;
  height: 485px
`

const SlidedImage = styled.img`
  width: 100%;
  height: 100%;
`

const SliderContainer = styled.div`
    width: 1220px;
    height: 713px;
    display: flex;
    justify-content: center;
    align-items: center;
    
`