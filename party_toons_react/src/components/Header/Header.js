import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

function Header() {
  return (
    <Container>
      <TitleBox>
        <h1>Party Toons</h1>
        <p>Events and Gatherings</p>
      </TitleBox>
      <MenuBox>
        <UnorderedList>
          <li>Location</li>
          <li>Our events</li>
          <li>About us</li>
          <li>Our Rentals</li>
          <li>Workshop</li>
          <li>Contacts</li>
          <MenuIcons>
            <FacebookIcon style={{ fill: "#424242" }} />
            <InstagramIcon style={{ fill: "#424242" }} />
            <ContactPhoneIcon style={{ fill: "#424242" }} />
          </MenuIcons>
        </UnorderedList>
      </MenuBox>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  display: flex;
  height: 190px;
  width: 100vw;
  background-color: white;
  justify-content: space-between;
  padding: 0 15.5%;
  overflow: hidden;
`;

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

  h1,p {
    display: flex;
    width: 110px;
  }

  p {
    font-weight: 300;
  }
`;

const MenuBox = styled.div`
  display: flex;
  flex-grow: 2;
  justify-content: space-between;
`;

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
`;

const MenuIcons = styled.div`
  display: flex;
  flex-grow: 3;
  justify-content: space-around;
  max-width: 150px;
`;
