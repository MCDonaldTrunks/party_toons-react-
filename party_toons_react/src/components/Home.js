import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Welcome from './Welcome'
import Collections from './Collections'


function Home() {
  return (
    <Container>
      <Header/>
      <Welcome/>
      <Collections/>
    </Container>
  )
}

export default Home


const Container = styled.div `
    height: 100%;
    width: 100%;
`