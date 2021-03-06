import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 10%;
  background-color: #f3f3f3;
  position: relative;
  @media (max-width: 425px) {
    background-color: #4c4c4c;
    height: 10%;
  }
`;
export const Wrapper = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 425px) {
    color: white;
    font-size: 10px;
    font-weight: 500;
    justify-content: space-between;
    padding: 0px 0px;
  }
`;

export const TextContainer = styled.div`
  width: 15%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 425px) {
    color: white;
    width: 50%;
  }
`;
export const Tasks = styled.p`
  margin: 0px 15px;
  font-weight: 600;
  @media (max-width: 425px) {
    margin: 0px 0px;
    font-size: 13px;
  }
`;
export const Text = styled.p`
  font-weight: 600;
  @media (max-width: 425px) {
    display: none;
  }
`;

export const ImageContainer = styled.div`
  @media (max-width: 425px) {
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;
export const Image = styled.img`
  display: none;
  @media (max-width: 425px) {
    margin-left: 10px;
    display: block;
    width: 80%;
    object-fit: scale-down;
  }
`;

export const Button = styled.button`
width: 60%;
padding: 6px;
text-align: center;
cursor: pointer;
font-size: 12px;
margin-left:10px;
background-color: #ff5000;
border-radius: 10px;
border:none;
color: white;
&:hover {
  transition: all 0.3s ease-in-out;
  background-color: #ff7000;
  color: white;
}
@media (max-width: 425px) {
  width: 20%;
  display: flex;
  transition: all 0.3s ease-in-out;
  align-items: center;
  justify-content: center;
  background-color: #ff7000;`;
