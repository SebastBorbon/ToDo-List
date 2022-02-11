import {
  Container,
  Wrapper,
  Tasks,
  Text,
  ImageContainer,
  Image,
  TextContainer,
} from "./toolBar.styles";
import NotificationsIcon from "@mui/icons-material/Notifications";
import logo from "../../images/logoTorrens.png";
import { useSelector } from "react-redux";

const ToolBar = () => {
  const taskNumber = useSelector((state) => state.tasks.length);
  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <Image src={logo}></Image>
        </ImageContainer>
        <TextContainer>
          <NotificationsIcon />
          <Tasks>Tareas({taskNumber})</Tasks>
          <Text>Sebastian</Text>
        </TextContainer>
      </Wrapper>
    </Container>
  );
};

export default ToolBar;
