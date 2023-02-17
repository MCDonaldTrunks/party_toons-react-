import React from "react";
import styled from "styled-components";

function OwnerSection() {
  return(
    <Container className="OwnerSection">
      <OwnerPhotoContainer>
        <img
          src="https://www.prhspeakers.com/wp-content/uploads/2013/03/Flynn_Gillian_940_529_72-ppi.jpg"
          alt="photo"
          style={{borderRadius: '10px'}}
        />
      </OwnerPhotoContainer>
      <OwnerMessage>
        <h2>
          My name is Romeo Sanchez, Lets make this special moment unforgettable as
          its meant to be
        </h2>
        <p>
          Amie Jewelry, is a family run business based on St. Johns Road, Boxmoor,
          Hemel Hempstead with over many years experience. At Amie Jewellers we
          strike the perfect balance between old and new. We ensure our
          established level of customer service is beyond expectation, while our
          desire to present the very latest in contemporary design keeps us ahead
          of the pack in offering supreme choice and value. We ensure our
          established level of customer service is beyond expectation, while our
          desire to present the very latest in contemporary design keeps us ahead
          of the pack in offering supreme choice and value.
        </p>
      </OwnerMessage>
    </Container>
  ); 
}

export default OwnerSection;

const Container = styled.div`
  height: 603px;
  width: 100%;
  padding: 2em 3em;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen 
  and (min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 2)
  and (min-resolution: 192dpi) { 
    height: 100vh;

  }
`;

const OwnerPhotoContainer = styled.div`
  height: 344px;
  width: 545px;
  padding-right: 12px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const OwnerMessage = styled.div`
  height: 344px;
  width: 545px;
  padding-left: 12px;
  justify-content: center;
  align-items: center;

  h2 {
    padding: 12px 0;
  }
`;
