import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 100px;
  height: 70%;
  width: 90%;
  @media (max-width: 425px) {
    margin: 0px 0px;
    justify-content: flex-start;
    flex-direction: column;
    background-color: #blue;
    height: 80%;
    width: 100%;
  }
`;
export const ShowTasks = styled.div`
  margin-left: 10px;
  width: 80%;
  height: 60vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }
  &::-webkit-scrollbar:vertical {
    width: 5px;
  }
  &::-webkit-scrollbar-button:increment,
  &::-webkit-scrollbar-button {
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #a4a4a4;
    border-radius: 40px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  @media (max-width: 425px) {
    width: 90%;
    height: 75%;
    margin: 30px 10px;
    overflow-x: hidden;
  }
`;

export const Wrapper = styled.div`
  background-color: #eeeeee;
  width: 90%;
  border-radius: 15px;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
  @media (max-width: 425px) {
    height: 80%;
    margin-bottom: 10px;
    padding: 10px;
    flex-wrap: wrap;
  }
`;
export const TaskTitle = styled.div`
  margin: 15px 20px;
  padding: 10px 10px;
  width: 200px;
  font-size: 17px;
  font-weight: 600;
  color: black;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  @media (max-width: 425px) {
    font-size: 13px;
    margin: 5px 0px;
  }
`;
export const TaskText = styled.div`
  display: inline-block
  overflow-wrap: break-word
  overflow: hidden;
  font-size: 16px;
  margin-top: 10px;
  font-weight: 500;
  @media (max-width: 425px) {
    font-size: 13px;
    margin: 5px 0px;
  }
`;
export const ContainerCheckbox = styled.div`
  display: flex;
  width: 15%;
  flex-direction: column;
  justify-content: space-around;
  padding: 1px;
  @media (max-width: 425px) {
    flex-direction: row;
    width: 100%;
    height: 10%;

    margin-bottom: 2px;
  }
`;
export const CreateTasks = styled.div`
  width: 30%;
  @media (max-width: 425px) {
    width: 100%;
    height: 80%;
    margin-bottom: 10px;
    padding: 10px;
  }
`;
export const CreateContainer = styled.div`
  background-color: #f3f3f3;
  margin: 0px 40px;
  width: 280px;
  height: 60vh;
  border-radius: 40px;
  display: flex;
  align-items: start;
  justify-content: flex-start;
  flex-direction: column;
  @media (max-width: 425px) {
    height: 61vh;
  }
`;
export const CreateTitle = styled.div`
  background-color: #ff5000;
  height: 10%;
  width: 260px;
  border-radius: 40px 40px 0px 0px;
  padding: 10px 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Label = styled.div`
  margin: 0px 20px;
  margin-top: 20px;
`;
export const InputTitle = styled.input`
  margin: 0px 20px;
  border: solid;
  border-width: 0.1px;
  border-color: #f3f3f3;
  border-radius: 5px;
  padding: 10px 10px;
  width: 200px;
  font-family: Montserrat;
`;
export const Input = styled.input`
  margin: 0px 20px;
  border: none;
  border-radius: 2px;
  padding: 40px 10px;
  width: 200px;
  font-family: Montserrat;
`;

export const Select = styled.select`
  margin: 5px 20px;
  padding: 10px 10px;
  border: none;
  cursor: pointer;
  width: 220px;
  font-family: Montserrat;
`;

export const Option = styled.option``;

export const Button = styled.button`
  margin: 20px 20px;
  padding: 10px 10px;
  border: solid;
  border-radius: 20px;
  border-width: 2px;
  border-color: #ff5000;
  cursor: pointer;
  color: #ff5000;
  width: 220px;
  font-family: Montserrat;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: #ff5000;
    color: white;
  }
  @media (max-width: 425px) {
    margin: 0px 20px;
    padding: 5px 5p
    height: 10px;
    display: flex;
    transition: all 0.3s ease-in-out;
    align-items: center;
    justify-content: center;
    margin-bottom:6px;
  }
`;
export const ButtonMobile = styled.button`
  padding: 10px 10px;
  width: 50%;
  margin-left: 5%;
  padding: 10px 10px;
  border-radius: 20px;
  border: none;
  background-color: #ff5000;
  font-family: Montserrat;
  cursor: pointer;
  color: white;
  display: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  margin: 10px;
  &:hover {
    transition: all 0.1s ease-in-out;
    background-color: #ff7000;
  }
  @media (max-width: 425px) {
    display: flex;
    transition: all 0.3s ease-in-out;
    align-items: center;
    justify-content: center;
    background-color: #ff7000;
  }
`;
export const BtnBorrar = styled.div`
  width: 60%;
  padding: 6px;
  text-align: center;
  cursor: pointer;
  font-size: 12px;
  background-color: #ff5000;
  border-radius: 10px;
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
    background-color: #ff7000;
`;
