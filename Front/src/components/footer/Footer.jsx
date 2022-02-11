import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { Container, Text, MenuItem, Wrapper } from "./footer.styles";

const Footer = () => {
  return (
    <Container>
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

export default Footer;
