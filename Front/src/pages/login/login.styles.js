import styled from "styled-components";
import signImg from "../../images/Sign in.jpg";
import loginMbl from "../../images/LoginMb.jpg";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(26, 26, 26, 0.5), rgba(51, 51, 51, 0.5)),
    url("${signImg}") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 425px) {
    background: linear-gradient(rgba(26, 26, 26, 0.5), rgba(51, 51, 51, 0.5)),
      url("${loginMbl}") center;
  }
`;

export const Wrapper = styled.div`
  height: 600px;
  width: 18%;
  padding: 10px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1025px) {
    width: 40%;
  }
  @media (max-width: 425px) {
    width: 70%;
  }
`;
export const TitleWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
`;
export const Title = styled.h1`
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  height: 20%;
`;
export const U = styled.div`
  border-bottom: 3px solid #ff7000;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  height: 80%;
  width: 80%;
`;

export const Input = styled.input`
  height: 40px;
  border-radius: 6px;
  background-color: #e3e3e3;
  margin: 10px 0px;
  border: none;
  font-size: 15px;
  font-weight: 600;
  opacity: 50%;
  border-bottom: 2px solid #88b2ff;
`;
export const InputLogin = styled.input`
  height: 40px;
  border-radius: 6px;
  background-color: #e3e3e3;
  margin: 20px 0px;
  border: none;
  font-size: 15px;
  font-weight: 600;
  opacity: 50%;
  border-bottom: 2px solid #88b2ff;
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
  margin-left: 10px;
`;
