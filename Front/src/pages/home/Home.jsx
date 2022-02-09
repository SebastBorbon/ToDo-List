import styled from "styled-components";
import SideBar from "../../components/sideBar/SideBar";
import ToolBar from "../../components/toolbar/ToolBar";
import backgroundImg from "../../images/BgHome.jpg";

const Container = styled.div`
  background-color: white;
  display: flex;
`;

const Wrapper = styled.div`

  width 100%;
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 40px;
  margin-top: 40px;
`;
const Image = styled.img`
  width: 80%;
`;
const Home = () => {
  return (
    <Container>
      <SideBar />
      <Wrapper>
        <ToolBar />
        <ImageContainer>
          <Image src={backgroundImg}></Image>
        </ImageContainer>
      </Wrapper>
    </Container>
  );
};

export default Home;
