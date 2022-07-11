import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';


function Header() {
  return (
    <Container>
      <TitleBox>
        <h1>Party Toons</h1>
        <p>Events, parties, and gatherings</p>
      </TitleBox>
      <MenuBox>
        <UnorderedList>
          <li>tab 1</li>
          <li>tab 2</li>
          <li>tab 3</li>
          <li>tab 4</li>
          <li>tab 5</li>
          <li>tab 6</li>
        <MenuIcons>
          <FacebookIcon />
          <InstagramIcon/>
          <ContactPhoneIcon/>
          </MenuIcons>

        </UnorderedList>
          
      </MenuBox>
    </Container>

    
  )
}

export default Header

const Container = styled.header `
  display: flex;
  height: 210px;
  width: 100vw;
  background-color: white;
  justify-content: space-between;
  
`

const TitleBox = styled.div `
  display: flex;
  flex-direction: column;
  Flex-grow: 1;
  justify-content: center;
  align-items: center;
  width: 40px;
  padding: 0 140px;

  h1 {
    font-weight: 325;
    color: green;
  }





`

const MenuBox = styled.div `
  display: flex;
  flex-grow: 3;
  justify-content: space-between;
`

const UnorderedList = styled.ul `
  display: flex;
  list-style-type: none;
  align-items: center;
  justify-content: space-around;
  flex-grow: 1;

  li:not(:last-child) {
    margin-right: 15px;
  }

  li {
      font-weight: bold;
  }
`

const MenuIcons = styled.div `
  display: flex;
  flex-grow: 3;
  justify-content: space-around;
  max-width: 150px;
`