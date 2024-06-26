import styled from "styled-components"
import { Swiper, SwiperSlide } from 'swiper/react';
import './product-image-slider.scss'
import { useState } from 'react';
import { Navigation, Thumbs } from 'swiper'

const ImageCarausel = props => {
    const [activeThumb, setActiveThumb] = useState()

    return (
        <Container id="ImageCarausel">
            <h2>Low price rentals, Call us now!</h2>
            <SubHeader>
                We are interested in individualities<br></br> and the possibility of creating
                unforgettable moments — that’s what makes our work so exciting
            </SubHeader>
            <Wrapper>
                <Swiper
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    modules={[Navigation, Thumbs]}
                    grabCursor={true}
                    thumbs={{ swiper: activeThumb }}
                    className='product-images-slider'
                >
                    {
                        props.images.map((item, index) => (
                            <SwiperSlide key={index}>
                                <img src={item} alt="product images" />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

                {//console.log(images)
                }
                <Swiper
                    onSwiper={setActiveThumb}
                    loop={true}
                    spaceBetween={7}
                    slidesPerView={5}
                    modules={[Navigation, Thumbs]}
                    className='product-images-slider-thumbs'
                >

                    {
                        props.images.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="product-images-slider-thumbs-wrapper">
                                    <img src={item} alt="product images" />
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Wrapper>
        </Container >
    )
}

export default ImageCarausel;

const Wrapper = styled.div`
    width: 55%;
    height: 70%;
    background-color: #918d8d;
    padding: 15px 15px;
    border-radius: 10px;
`

const Container = styled.div`
    width: 100%;
    height: 1038px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    flex-direction: column ;

    @media screen 
    and (min-device-width: 1200px) 
    and (max-device-width: 1600px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (min-resolution: 192dpi){
      height: 800px;

      h2 {
        font-size: 24px;
      }
    }
`
const SubHeader = styled.span`
  font-size: 13px;
  text-align: center;
  width: 40%;
  line-height: 1.8;
  padding: 50px 0;

  @media screen 
    and (min-device-width: 1200px) 
    and (max-device-width: 1600px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (min-resolution: 192dpi){
      padding: 20px 0;
      font-size: 18px;
      line-height: 1.4;
      width: 50%;
    }
`;



