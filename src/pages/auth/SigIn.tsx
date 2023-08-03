import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import img from "../../assets/Screenshot (1).png";

const Register = () => {
  return (
    <div>
      <Container>
        <Hold>
          <Right src={img} />
          <Main>
            <Title>Sign-in</Title>

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
            <Button to="/register">Register</Button>

            <Holder>
              <Line />
              <LineText>OR</LineText>
              <Line />
            </Holder>
            <Button2 type="submit">Sign in</Button2>
          </Main>
        </Hold>
      </Container>
    </div>
  );
};

export default Register;

const Title = styled.div`
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: 600;
  color: #3af83a;
`;

const LineText = styled.div`
  text-transform: uppercase;
  font-size: 20px;
  margin: 0 10px;
  /* width: 100%; */
`;

const Line = styled.div`
  width: 160px;
  border-bottom: 1px solid;
  border-color: var(--appBorder);
`;

const Holder = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  margin: 5px 0;
`;

const Button2 = styled.button`
  width: 90%;
  background-color: #53fa53;
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

const Button = styled(Link)`
  width: 90%;
  background-color: #3af83a;
  color: var(--appBG);
  height: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
  border-radius: var(--appRadiusSmall);
  text-decoration: none;
`;

const Error = styled.div`
  font-size: 10px;
  color: #53012e;
  font-weight: bold;
  text-align: right;
  width: 90%;
  margin-bottom: 7px;
`;

const ImageLabel = styled.label`
  padding: 8px 15px;
  border-radius: var(--appRadiusSmall);
  background-color: var(--appMainColor);
  color: var(--appBG);
  font-size: 12px;
  margin-top: 4px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 1px solid var(--appBorder);
  object-fit: cover;
  margin: 5px 0;
`;

const ImageInput = styled.input`
  display: none;
`;
const ImageHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
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
  height: 400px;
  object-fit: cover;
`;

const Main = styled.form`
  width: 400px;
  height: 100%;
  /* border: 1px solid skyblue; */
  border-radius: var(--appRadiusSmall);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  /* margin: 10px 0; */
`;
const Hold = styled.div`
  height: 400px;
  display: flex;
  /* padding: 10px 0; */
  border: 1px solid #3af83a;
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
