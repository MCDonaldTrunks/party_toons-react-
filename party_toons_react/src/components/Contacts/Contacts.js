import React, { useState } from "react";
import styled from "styled-components";

function Contacts() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const inquiry = { fullName, email, phoneNumber, message }

    console.log('done')
    console.log(inquiry)
  }

  return (
    <Container id="Contacts">
      <SubContainer>
        <LeftInfo>
          <h2>Contacts</h2>
          <p>
            We welcome every new friend. Together we will bring some magic into
            this world.
          </p>
          <InfoMains>
            <label>Adress</label>
            <p>2038 E 10th St, <br></br>Long Beach, CA 90813</p>
          </InfoMains>
          <InfoMains>
            <label>Hours of Bussiness</label>
            <p>Monday - Saturday: 11 AM - 10 PM <br></br>
              Sunday: 11 AM - 5 PM</p>

          </InfoMains>
          <InfoMains>
            <label>Contacts</label>
            <p>+1 (234) 567 89 00<br></br>
              mywebsite@a.weblium.com</p>
          </InfoMains>
        </LeftInfo>
        <RightBackground>
          <RightForm
            onSubmit={submitHandler}>
            <input
              placeholder="Enter your full name*"
              value={fullName}
              name = 'fullName'
              onChange={(e) => setFullName(e.target.value)}
            ></input>
            <input
              placeholder="Enter your phone number*"
              value={phoneNumber}
              name = 'phoneNumber'
              onChange={(e) => setPhoneNumber(e.target.value)}
            ></input>
            <input
              placeholder="Enter your email address*"
              value={email}
              name = 'email'
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <textarea
              placeholder="Type your message*"
              value={message}
              name = 'message'
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <SubButton
              type="submit"
            >
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
  padding: 0 15px;

  p {
    font-size: 20px;
  }

  * {
    margin-top: 25px;
  }

  h2 {
    font-size: 32px;
    font-weight: 400;
    margin-top: 0;
  }
`;

const InfoMains = styled.div`
  display: flex;
  
  label {
    width: 159px;
    font-size: 24px;
    margin-right: 30px
  }

  p {
    font-size: 16px;
  }
`

const RightBackground = styled.div`
  display: flex;
  flex: 1;
  padding: 5rem;
  background-color: #e9e9e9;
  padding: 0 15px;
  background-clip: content-box;
  justify-content: center;
  align-items: center;
`

const RightForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65%;
  height: 80%;

  input {
    border-radius: 5px;
    padding: 12px 24px;
    width: 100%;
    background-color: rgba(67, 67, 67, 0.12);
    border-color: #d9d9d9;
    border: none;
    margin-top: 24px;
  }

  textarea {
    border-color: #d9d9d9;
    background-color: rgba(67, 67, 67, 0.12);
    height: 126px;
    padding: 12px 24px;
    width: 100%;
    margin-top: 24px;
    resize: none;
    border: none;
  }

  button:hover, button:focus {
  outline: none;
}
`;

const SubButton = styled.button`
  display: flex;
  width: 100%;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  margin-top: 56px;
  background-color: #383838;
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`
//json-server --watch data/db.json --port 8000