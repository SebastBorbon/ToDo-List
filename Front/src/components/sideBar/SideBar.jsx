import styled from "styled-components";
import logo from "../../images/logoTorrens.png";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

const Container = styled.div`
  background-color: #474747;
  height: 100vh;
  width: 15%;
  position: sticky;
  top: 50px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;

const ImgContainer = styled.div`
  padding: 20px 20px;
  background-color: #ff5000;
  width: 180px;
  height: 130px;
  margin: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  height: 45px;
`;
const Wrapper = styled.div`
  width: 180px;
  height: 250px;
  padding: 10px 20px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const MenuItem = styled.button`
  width: 220px;
  padding: 5px 30px;
  display: flex;
  align-items: center;
  justify-content: left;
  background-color: #474747;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #787878;
  }
  &:focus {
    transition: all 0.2s ease-in-out;
    background-color: #ff5000;
  }
`;
const Text = styled.p`
  margin-left: 15px;
  color: white;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 16px;
`;
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
