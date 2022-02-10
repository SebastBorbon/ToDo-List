import { Container, Wrapper, Tasks, Text } from "./toolBar.styles";
import NotificationsIcon from "@mui/icons-material/Notifications";

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
