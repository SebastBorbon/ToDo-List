import SideBar from "../../components/sideBar/SideBar";
import ToolBar from "../../components/toolbar/ToolBar";

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
          <Image></Image>
        </ImageContainer> */}
        <Tasks />
        {/* <Users /> */}
      </Wrapper>
    </Container>
  );
};

export default Home;
