import React from 'react'
import styled from 'styled-components'

function OurRentals() {
  return (
    <Container id='OurRentals'>
      <h2> Our Rentals</h2>
      <CardContainer>
        <RentalCard>
          <ImageFiller src={require('./images/image1.jpg')}  />
          <h3>Jumpers and bouncy houses</h3>
          <p className='desc'>Look no further for child entertainment with our seasonal variety of bouncy houses.</p>
          <a >
            <p>See More</p>
          </a>
        </RentalCard>
        <RentalCard>
          <ImageFiller src={require('./images/image2.jpg')}  />
          <h3>Snacks</h3>
          <p className='desc'>Choose from our variety of snack machines from slushies to cotton candy, popcorn, and hotdogs.</p>
          <a>
            <p>See More</p>
          </a>
        </RentalCard>
        <RentalCard>
          <ImageFiller src={require('./images/image3.jpg')}  />
          <h3>Tables, Chairs, and Tents</h3>
          <p className='desc'>We have a seat for everyone invited and platforms for all dishes to be enjoyed. </p>
          <a>
            <p>See More</p>
          </a>
        </RentalCard>
        <RentalCard>
          <ImageFiller src={require('./images/image4.jpg')}  />
          <h3>Decorations and themes</h3>
          <p className='desc'> Whatever the occasion we have you covered! Our themes selectin should cover most events for most circumstances.</p>
          <a>
            <p>See More</p>
          </a>
        </RentalCard>
      </CardContainer>

    </Container>
  )
}

export default OurRentals;

const Container = styled.div`
  height: 1387px;
  width: 100%;
  background-color: white;
  padding: 30px 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    font-size: 32px;
    font-weight: 400;
  }

  @media screen 
  and (min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 2)
  and (min-resolution: 192dpi) { 
    
    height: 750px;

    h2 {
      font-size: 24px;
    }

  }
`

const CardContainer = styled.div`
  width: 1170px;
  height: 1236px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 70px;
  gap: 20px;

  @media screen 
  and (min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 2)
  and (min-resolution: 192dpi) { 

    height: 650px;
    width: 700px;
    padding-top: 20px;
    overflow: hidden;
  }
`

const RentalCard = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(214, 214, 214);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1em;
  position: relative;

  .desc {
    padding: 2em 0;
  }

  h3, p, a{
    z-index: 20;
  }

  h3 {
    font-size: 24px;
    font-weight: 400;
  }

  p {
    opacity: 0;
    transition: opacity .5s;
  }

  :hover {
    p {
      opacity: 1;
    }


    img {
      filter: blur(6px)
    }
  }

  
`

const ImageFiller = styled.img`
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: fill;
  transition: .25s;
`

