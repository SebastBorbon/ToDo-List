import styled from "styled-components";
import backgroundImg from "../../images/BgHome.jpg";
import backgroundMbl from "../../images/BgHomeMb.jpg";

export const Container = styled.div`
  display: flex;
  @media (max-width: 425px) {
    width: 100%;
    height: 100vh;
  }
`;

export const Wrapper = styled.div`
  width 100%;
  
`;
export const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 40px;
  margin-top: 40px;
  width: 80%;
  height: 80%;
  @media (max-width: 425px) {
    margin: 0px;
    width: 100%;
    height: 100%;
  }
`;
export const Image = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("${backgroundImg}");
  @media (max-width: 425px) {
    background-image: url("${backgroundMbl}");
  }
`;
