import styled from "styled-components";
import signImg from "../../images/Sign in.jpg";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(26, 26, 26, 0.5), rgba(51, 51, 51, 0.5)),
    url("${signImg}") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  height: 450px;
  width: 15%;
  padding: 20px;
  background-color: white;
  border-radius: 20px;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  margin-left: 60px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-top: 50px;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 15px 2px;
  padding: 15px;
  border-radius: 6px;
  background-color: #e3e3e3;
  border: none;
  font-size: 15px;
  font-weight: 600;
  opacity: 50%;
`;

export const Button = styled.button`
  min-width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #ff5000;
  color: white;
  cursor: pointer;
  margin: 40px 0px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  &:hover {
    transition: all 0.1s ease-in-out;
    background-color: #ff7000;
  }
`;

export const Link = styled.a`
  font-size: 16px;
  text-decoration: underline;
  cursor: pointer;
  color: #ff5000;
`;
