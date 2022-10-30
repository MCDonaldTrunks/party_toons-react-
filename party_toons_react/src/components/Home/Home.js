import React from 'react'
import styled from 'styled-components'
import Header from './../Header/Header'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import Slider from '../WelcomeCarousel/Slider'
import OwnerSection from '../OwnerSection/OwnerSection'
import OurRentals from '../OurRentals/OurRentals'
import Workshop from '../Workshop/Workshop'
import Contacts from '../Contacts/Contacts'
import ImageCarausel from '../component/ImageCarausel/ImageCarausel'
import { productImages } from '../component/assets/productImages'

function Home() {
  return (

    <Container>
      <Header />

      <Slider />
      <ImageCarausel images={productImages} />
      <OwnerSection />
      <OurRentals />
      <Workshop />
      <Contacts />

    </Container>
  )
}

export default Home


const Container = styled.div`
    height: 100%;
    width: 100%;

`



// https://nu8br.draftium.site/