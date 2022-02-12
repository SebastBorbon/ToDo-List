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

const SideBar = ({ setRender }) => {
  const isAdmin = window.localStorage.getItem("isAdmin");

  const usersView = () => {
    if (isAdmin == "true") {
      return (
        <MenuItem onClick={() => setRender("Users")}>
          <PeopleAltIcon style={{ color: "white" }} /> <Text>Usuarios</Text>
        </MenuItem>
      );
    }
  };
  return (
    <Container>
      <ImgContainer>
        <Image src={logo}></Image>
      </ImgContainer>
      <Wrapper>
        <MenuItem onClick={() => setRender("Home")}>
          <HomeIcon style={{ color: "white" }} /> <Text>Inicio</Text>
        </MenuItem>
        {usersView()}
        <MenuItem onClick={() => setRender("Tasks")}>
          <FormatListBulletedIcon style={{ color: "white" }} />
          <Text>Tareas</Text>
        </MenuItem>
      </Wrapper>
    </Container>
  );
};

export default SideBar;
