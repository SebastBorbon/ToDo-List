import SideBar from "../../components/sideBar/SideBar";
import ToolBar from "../../components/toolbar/ToolBar";
import Tasks from "../../components/tasks/Tasks";
import { Container, Wrapper, ImageContainer, Image } from "./home.styles";
import Users from "../../components/users/Users";
import Footer from "../../components/footer/Footer";
import { useState } from "react";

const Home = () => {
  const [render, setRender] = useState();
  const changeViews = () => {
    switch (render) {
      case "Home":
        return (
          <ImageContainer>
            <Image></Image>
          </ImageContainer>
        );
      case "Users":
        return <Users />;
      case "Tasks":
        return <Tasks />;
      default:
        return (
          <ImageContainer>
            <Image></Image>
          </ImageContainer>
        );
    }
  };

  return (
    <Container>
      <SideBar setRender={setRender} />
      <Wrapper>
        <ToolBar />
        {changeViews()}
        <Footer setRender={setRender} />
      </Wrapper>
    </Container>
  );
};

export default Home;
