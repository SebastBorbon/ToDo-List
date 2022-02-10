import styled from "styled-components";

export const Container = styled.div`
  margin-left: 70px;
  margin-top: 100px;
  width: 60vw;
  height: 70%;

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
export const Table = styled.table`
  width: 100%;
`;
export const Thead = styled.thead`
  width: 100%;
  height: 8%;
  background-color: white;
  text-align: left;
`;
export const Tr = styled.tr`
  width: 20%;
`;
export const Tbody = styled.tbody`
  margin: 0px 10px;
  height: 40px;
`;
export const Th = styled.th`
  width: 20%;
  text-align: left;
`;
export const Title = styled.p``;
export const Td = styled.td`
  text-align: left;
  margin-bottom: 5px;
  height: 40px;
`;

export const Info = styled.div``;
