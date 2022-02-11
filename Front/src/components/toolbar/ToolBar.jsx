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

const ToolBar = () => {
  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <Image src={logo}></Image>
        </ImageContainer>
        <TextContainer>
          <NotificationsIcon />
          <Tasks>Tareas(2)</Tasks>
          <Text>Sebastian</Text>
        </TextContainer>
      </Wrapper>
    </Container>
  );
};

export default ToolBar;
