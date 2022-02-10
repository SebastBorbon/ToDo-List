import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-top: 100px;
  height: 80%;
`;
export const ShowTasks = styled.div`
  width: 80%;
  height: 60vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
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
`;

export const Wrapper = styled.div`
  background-color: #f3f3f3;
  width: 90%;
  height: 165px;
  border-radius: 15px;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
`;
export const TaskTitle = styled.div`
  margin: 15px 30px;
  padding: 10px 10px;
  width: 150px;
  font-size: 17px;
  font-weight: 600;
  color: black;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
`;
export const TaskText = styled.div`
  display: inline-block
  overflow-wrap: break-word
  max-width: 100%;
  overflow: hidden;
  font-size: 16px;
  margin-top: 10px;
  font-weight: 500;
`;
export const ContainerCheckbox = styled.div`
  display: flex;
  width: 130px;
  flex-direction: column;
  justify-content: space-between;
  padding: 1px;
`;
export const CreateTasks = styled.div`
  width: 30%;
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
`;
