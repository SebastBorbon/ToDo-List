import {
  Container,
  Wrapper,
  Tasks,
  Text,
  ImageContainer,
  Image,
  TextContainer,
  Button,
} from "./toolBar.styles";
import NotificationsIcon from "@mui/icons-material/Notifications";
import logo from "../../images/logoTorrens.png";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const ToolBar = () => {
  const taskNumber = useSelector((state) => state.tasks.length);
  const [numberTasks, setNumberTasks] = useState("");
  useEffect(() => {
    if (numberTasks !== taskNumber) setNumberTasks(taskNumber);
  }, [taskNumber]);

  const handleSignOut = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("isAdmin");
    window.location.reload();
  };

  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <Image src={logo}></Image>
        </ImageContainer>
        <TextContainer>
          <NotificationsIcon />
          <Tasks>Tareas({numberTasks})</Tasks>
          <Text>Sebastian</Text>
          <Button onClick={handleSignOut}>Logout</Button>
        </TextContainer>
      </Wrapper>
    </Container>
  );
};

export default ToolBar;
