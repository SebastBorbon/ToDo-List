import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 10%;
  bottom: 0;
  display: none;
  background-color: #474747;
  @media (max-width: 425px) {
    display: flex;
  }
`;

export const Wrapper = styled.div`
  margin: 0px 15px;
  background-color: #474747;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const MenuItem = styled.button`
  width: 80%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #474747;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #787878;
  }
  &:focus {
    transition: all 0.2s ease-in-out;
    background-color: #ff5000;
  }
`;

export const Text = styled.p`
  color: white;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 15px;
  margin-left: 3px;
`;
