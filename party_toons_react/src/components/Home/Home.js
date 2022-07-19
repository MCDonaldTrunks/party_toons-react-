import React from 'react'
import styled from 'styled-components'
import Header from './../Header/Header'
import Welcome from './../Carousel/Welcome'
import Collections from './../Collections/Collections'
import Slider from './../Carousel/Slider'


function Home() {
  return (
    <Container>
      <Header/>
      <Slider/>
      <Collections/>
    </Container>
  )
}

export default Home


const Container = styled.div `
    height: 100%;
    width: 100%;
`