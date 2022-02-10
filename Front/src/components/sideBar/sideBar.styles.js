import styled from "styled-components";
export const Container = styled.div`
  background-color: #474747;
  height: 100vh;
  width: 15%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 425px) {
    display: none;
  }
`;

export const ImgContainer = styled.div`
  padding: 20px 20px;
  background-color: #ff5000;
  width: 70%;
  height: 15%;
  margin: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;
export const Image = styled.img`
  height: 35%;
`;
export const Wrapper = styled.div`
  width: 85%;
  height: 30%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
export const MenuItem = styled.button`
  width: 100%;
  padding: 5px 30px;
  display: flex;
  align-items: center;
  justify-content: left;
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
  margin-left: 15px;
  color: white;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 16px;
`;
