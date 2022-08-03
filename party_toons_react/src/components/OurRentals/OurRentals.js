import React from 'react'
import styled from 'styled-components'

function OurRentals() {
  return (
    <Container>
      <h2> Our Rentals</h2>
      <CardContainer>
        <RentalCard>
          <h3>Jumpers and bouncy houses</h3>
          <p className='desc'>Look no further for child entertainment with our seasonal variety of bouncy houses.</p>
          <a>
            <p>See More</p>
          </a>
        </RentalCard>
        <RentalCard>
          <h3>Snacks</h3>
          <p className='desc'>Choose from our variety of snack machines from slushies to cotton candy, popcorn, and hotdogs.</p>
          <a>
            <p>See More</p>
          </a>
        </RentalCard>
        <RentalCard>
          <h3>Tables, Chairs, and Tents</h3>
          <p className='desc'>We have a seat for everyone invited and platforms for all dishes to be enjoyed. </p>
          <a>
            <p>See More</p>
          </a>
        </RentalCard>
        <RentalCard>
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
  padding: 100px 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    font-size: 32px;
    font-weight: 400;
  }
`

const CardContainer = styled.div`
  width: 1170px;
  height: 1236px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 70px;
  gap: 20px;
`

const RentalCard = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(214, 214, 214);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1em;

  .desc {
    padding: 2em 0;
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
  }
`

