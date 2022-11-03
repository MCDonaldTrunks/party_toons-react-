import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { Link } from 'react-scroll'
import './Header.css'
import { ShowChart } from '@material-ui/icons';


function Header() {

  const [show, setShow] = useState(true)
  const controlNavbar = () => {
    if (window.scrollY && window.scrollY > 100 ) {
      setShow(false)
      console.log('trigered')
      console.log(window.scrollY)
    } else {
      setShow(true)
      
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
  }, [])


  return (
    <header  className={`${show ? 'davbar':'davbar__blue'}`}>
      <TitleBox>
        <h1>Party Toons</h1>
        <p>Events and Gatherings</p>
      </TitleBox>
      <MenuBox>
        <UnorderedList>
          <li className='nav-item'>
            <Customlink to='Welcome' spy={true} smooth={true} offset={-190} duration={500}>Home</Customlink>
          </li>
          <li className='nav-item'>
            <Customlink to='ImageCarausel' spy={true} smooth={true} offset={-60} duration={500}>Samples</Customlink>
          </li>
          <li className='nav-item'>
            <Customlink to='OwnerSection' spy={true} smooth={true} offset={-60} duration={500}>About</Customlink>
          </li>
          <li className='nav-item'>
            <Customlink to='OurRentals' spy={true} smooth={true} offset={-60} duration={500}>Our Rentals</Customlink>
          </li>
          <li className='nav-item'>
            <Customlink to='Workshop' spy={true} smooth={true} offset={-60} duration={500}>Workshop</Customlink>
          </li>
          <li className='nav-item'>
            <Customlink to='Contacts' spy={true} smooth={true} offset={-60} duration={500}>Contacts</Customlink>
          </li>
          <MenuIcons>
            <FacebookIcon style={{ fill: '#424242', cursor: "pointer" }} />
            <InstagramIcon style={{ fill: '#424242', cursor: "pointer" }} />
            <ContactPhoneIcon style={{ fill: '#424242', cursor: "pointer" }} />
          </MenuIcons>

        </UnorderedList>

      </MenuBox>
    </header>


  )
}

export default Header;




const Customlink = styled(Link)`
  cursor: pointer;
`

const TitleBox = styled.div`
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  padding: 0 5em 0 3em;
  h1 {
    font-weight: 325;
    color: green;
  }

  h1, p {
    display:flex;
    width: 110px;
  }

  p {
    font-weight: 300;
  }
`

const MenuBox = styled.div`
  display: flex;
  flex-grow: 2;
  justify-content: space-between;
`

const UnorderedList = styled.ul`
  display: flex;
  list-style-type: none;
  align-items: center;
  justify-content: space-around;
  flex-grow: 1;
  li:not(:last-child) {
    margin-right: 15px;
  }

  li {
      font-weight: 300;
  }
`

const MenuIcons = styled.div`
  display: flex;
  flex-grow: 3;
  justify-content: space-around;
  max-width: 150px;
`