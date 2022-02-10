import logo from "../../images/logoTorrens.png";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import {
  Container,
  ImgContainer,
  Wrapper,
  MenuItem,
  Text,
  Image,
} from "./sideBar.styles";

const SideBar = () => {
  return (
    <Container>
      <ImgContainer>
        <Image src={logo}></Image>
      </ImgContainer>
      <Wrapper>
        <MenuItem>
          <HomeIcon style={{ color: "white" }} /> <Text>Inicio</Text>
        </MenuItem>
        <MenuItem>
          <PeopleAltIcon style={{ color: "white" }} /> <Text>Usuarios</Text>
        </MenuItem>
        <MenuItem>
          <FormatListBulletedIcon style={{ color: "white" }} />{" "}
          <Text>Tareas</Text>
        </MenuItem>
      </Wrapper>
    </Container>
  );
};

export default SideBar;
