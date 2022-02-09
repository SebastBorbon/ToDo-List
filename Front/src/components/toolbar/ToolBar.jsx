import styled from "styled-components";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: #ececec;
  position: sticky;
  top: 0;
  z-index: 999;
`;
const Wrapper = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: end;
`;
const Tasks = styled.p`
  margin: 0px 15px;
  font-weight: 600;
`;
const Text = styled.p`
  font-weight: 600;
`;

const ToolBar = () => {
  return (
    <Container>
      <Wrapper>
        <NotificationsIcon />
        <Tasks>Tareas(2)</Tasks>
        <Text>Sebastian</Text>
      </Wrapper>
    </Container>
  );
};

export default ToolBar;
