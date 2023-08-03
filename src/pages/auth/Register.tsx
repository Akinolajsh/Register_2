import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import img from '../../assets/Screenshot (1).png'


const Register = () => {

  return (
    <div>
      <Container>
        <Hold>
          <Right src={img}/>
          <Main>
            <Title>welcome to our platform</Title>
            <InputHolder>
              <InputTitle>User Name</InputTitle>
              <Input placeholder="Enter you username" />
            </InputHolder>
            <Error>Error</Error>

            <InputHolder>
              <InputTitle>Email</InputTitle>
              <Input placeholder="Enter you email" />
            </InputHolder>
            <Error>Error</Error>

            <InputHolder>
              <InputTitle>Password</InputTitle>
              <Input placeholder="Enter you  password" />
            </InputHolder>
            <Error>Error</Error>
            <Holder>
              <Button type="submit">Register</Button>

              <Button2 to="/sign-in">Sign in</Button2>
            </Holder>
          </Main>
        </Hold>
      </Container>
    </div>
  );
};

export default Register;

const Title = styled.div`
  margin-bottom: 20px;
  font-size: 36px;
  /* word-spacing: 5px; */
  text-align: center;
  color:  #53fa53;
  font-weight: 600;
`;

const Holder = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  margin: 5px 0;
`;

const Button2 = styled(Link)`
  width: 40%;
  background-color: #53fa53;
  color: var(--appBG);
  height: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
  border-radius: var(--appRadiusSmall);
  text-decoration: none;
`;

const Button = styled.button`
  width: 40%;
  background-color: #3af83a;
  color: var(--appBG);
  height: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
  border-radius: var(--appRadiusSmall);
  font-size: 15px;
  font-family: Poppins;
  outline: none;
  border: 0;
`;

const Error = styled.div`
  font-size: 10px;
  color: #53012e;
  font-weight: bold;
  text-align: right;
  width: 90%;
  margin-bottom: 7px;
`;


const Input = styled.input`
  background-color: transparent;
  border: 0;
  outline: none;
  width: 95%;
  height: 95%;
  padding-left: 10px;
`;

const InputTitle = styled.div`
  background-color: white;
  margin: 0 10px;
  position: absolute;
  top: -20px;
  left: 0;
  font-size: 12px;
`;

const InputHolder = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 90%;
  height: 35px;
  border: 1px solid var(--appBorderL);
  border-radius: var(--appRadiusSmall);
  margin: 5px 0;
`;

const Right = styled.img`
  width: 400px;
  height: 425px;
  object-fit: cover;
`;
const Main = styled.form`
  width: 400px;
  height: 100%;
  border-radius: var(--appRadiusSmall);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;
const Hold = styled.div`
  min-height: 350px;
  display: flex;
  /* padding: 10px 0; */
  border: 1px solid  #53fa53;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  color: var(--appText);
  display: flex;
  justify-content: center;
  align-items: center;
`;
