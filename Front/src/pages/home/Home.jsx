import SideBar from "../../components/sideBar/SideBar";
import ToolBar from "../../components/toolbar/ToolBar";
import backgroundImg from "../../images/BgHome.jpg";
import Tasks from "../../components/tasks/Tasks";
import { Container, Wrapper, ImageContainer, Image } from "./home.styles";
import Users from "../../components/users/Users";

const Home = () => {
  return (
    <Container>
      <SideBar />
      <Wrapper>
        <ToolBar />
        {/* <ImageContainer>
          <Image src={backgroundImg}></Image>
        </ImageContainer> */}
        {/* <Tasks /> */}
        <Users />
      </Wrapper>
    </Container>
  );
};

export default Home;
