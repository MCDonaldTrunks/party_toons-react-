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
    </Container>
  );
}

export default Contacts;

const Container = styled.div`
  display: flex;
  height: 791px;
  width: 100%;
  background-color: white;
  padding: 100px 0;
`;

const LeftInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  justify-content: space-around;
`;

const RightForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  justify-content: space-around;
`;

const SubButton = styled.button`
  display: flex;

`

const InfoMains = styled.div`
  display: flex;
`



//json-server --watch data/db.json --port 8000


