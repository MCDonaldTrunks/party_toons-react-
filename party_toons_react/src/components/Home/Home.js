import React from 'react'
import styled from 'styled-components'
import Header from './../Header/Header'
import ImageSliderContainer from '../ImageSlider/ImageSliderContainer'
import Slider from '../WelcomeCarousel/Slider'
import OwnerSection from '../OwnerSection/OwnerSection'
import OurRentals from '../OurRentals/OurRentals'
import Workshop from '../Workshop/Workshop'
import Contacts from '../Contacts/Contacts'

function Home() {
  return (
    <Container>
      <Header/>
      <Slider/>
      <ImageSliderContainer/>
      <OwnerSection/>
      <OurRentals/>
      <Workshop/>
      <Contacts/>
    </Container>
  )
}

export default Home


const Container = styled.div `
    height: 100%;
    width: 100%;
`