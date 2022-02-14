import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { Container, Text, MenuItem, Wrapper } from "./footer.styles";

const Footer = ({ setRender }) => {
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
      <Wrapper>
        <MenuItem onClick={() => setRender("Home")}>
          <HomeIcon style={{ color: "white" }} /> <Text>Inicio</Text>
        </MenuItem>
        {usersView()}
        <MenuItem onClick={() => setRender("Tasks")}>
          <FormatListBulletedIcon style={{ color: "white" }} />{" "}
          <Text>Tareas</Text>
        </MenuItem>
      </Wrapper>
    </Container>
  );
};

export default Footer;
