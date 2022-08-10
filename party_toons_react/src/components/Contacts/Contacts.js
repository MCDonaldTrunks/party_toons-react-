import React, { useState } from "react";
import styled from "styled-components";

function Contacts() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e)=> {
    e.preventDefault();
    const inquiry = { fullName, email, phoneNumber, message}

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inquiry)
    }).then(() => {
      console.log('inquiry added successfully')
    })
  }

  return (
    <Container>
      <SubContainer>
        <LeftInfo>
          <h2>Contacts</h2>
          <p>
            We welcome every new friend. Together we will bring some magic into
            this world.
          </p>
          <InfoMains>
            <label>Adress</label>

          </InfoMains>
          <InfoMains>
            <label>Hours of Bussiness</label>

          </InfoMains>
          <InfoMains>
            <label>Contacts</label>

          </InfoMains>
        </LeftInfo>
        <RightBackground>
          <RightForm 
            onSubmit={submitHandler}>
            <input
              placeholder="Enter your full name*"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            ></input>
            <input
              placeholder="Enter your phone number*"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            ></input>
            <input
              placeholder="Enter your email address*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <textarea
              placeholder="Type your message*"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <SubButton>
              Submit
            </SubButton>
          </RightForm>
        </RightBackground>
      </SubContainer>
    </Container>
  );
}

export default Contacts;

const Container = styled.div`
  display: flex;
  height: 791px;
  width: 100%;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const SubContainer = styled.div`
  display: flex;
  width: 64%;
  height: 74%;
`

const LeftInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex: 1;
  justify-content: space-around;
`;

const InfoMains = styled.div`
  display: flex;
`

const RightBackground = styled.div`
  display: flex;
  flex: 1;
  padding: 5rem;
  background-color: #e9e9e9;
`

const RightForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  justify-content: space-between;

  input {
    border-radius: 5px;
    padding: 12px 24px;
    width: 70%;
    background-color: rgba(67, 67, 67, 0.12);
    border-color: #d9d9d9;
    border: none;
  }

  textarea {
    border-color: #d9d9d9;
    background-color: rgba(67, 67, 67, 0.12);
    height: 40%;
    padding: 12px 24px;
    width: 70%;
  }

  button:hover, button:focus {
  outline: none;
}
`;

const SubButton = styled.button`
  display: flex;

`





//json-server --watch data/db.json --port 8000


