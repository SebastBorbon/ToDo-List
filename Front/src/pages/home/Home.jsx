import styled from "styled-components";
import SideBar from "../../components/sideBar/SideBar";
import ToolBar from "../../components/toolbar/ToolBar";

const Container = styled.div`
  background-color: white;
  display: flex;
`;
const Home = () => {
  return (
    <Container>
      <SideBar />
      <ToolBar />
    </Container>
  );
};

export default Home;
