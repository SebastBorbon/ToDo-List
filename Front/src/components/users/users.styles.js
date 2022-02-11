import styled from "styled-components";

export const UserContainer = styled.div`
  height: 80%;
  width: 100%;
`;
export const Container = styled.div`
  margin-left: 70px;
  margin-top: 100px;
  width: 70%;
  height: 70%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }
  &::-webkit-scrollbar:vertical {
    width: 1px;
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
    margin-left: 5%;
    width: 90%;
    height: 60%;
    overflow-x: scroll;
  }
`;
export const Table = styled.table`
  width: 90%;
  @media (max-width: 425px) {
    width: 150%;
    height: 80%;
  }
`;
export const Thead = styled.thead`
  width: 100%;
  height: 8%;
  text-align: left;
  @media (max-width: 425px) {
    width: 100%;
    font-size: 13px;
  }
`;
export const Tr = styled.tr`
  width: 20%;
`;
export const Tbody = styled.tbody`
  margin: 0px 10px;
  @media (max-width: 425px) {
    width: 100%;
    font-size: 13px;
    text-align: left;
  }
`;
export const Th = styled.th`
  width: 20%;
  text-align: left;
  @media (max-width: 425px) {
    text-align: center;
  }
`;
export const Title = styled.p``;
export const Td = styled.td`
  text-align: left;
  margin-bottom: 5px;
  height: 40px;
  @media (max-width: 425px) {
    text-align: center;
  }
`;

export const Info = styled.div``;
