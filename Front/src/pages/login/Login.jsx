import { useState, useEffect } from "react";
import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
  Link,
  TitleWrapper,
  U,
  InputLogin,
} from "./login.styles";
import { useDispatch } from "react-redux";
import { login, signUp } from "../../redux/actions/apiCalls";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [register, setRegister] = useState(false);
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleLogin = (e) => {
    e.preventDefault(e);
    login(dispatch, inputs);
  };
  const handlesignUp = (e) => {
    e.preventDefault(e);

    signUp(dispatch, inputs);
  };
  return (
    <Container>
      {register ? (
        <Wrapper>
          <TitleWrapper>
            <Title onClick={() => setRegister(false)}>Iniciar Sesión</Title>
            <Title>
              <U>Registrarse</U>
            </Title>
          </TitleWrapper>
          <Form>
            <Input placeholder="Nombre" name="name" onChange={handleChange} />
            <Input
              placeholder="Apellido"
              name="lastName"
              onChange={handleChange}
            />
            <Input placeholder="Email" name="email" onChange={handleChange} />
            <Input placeholder="Celular" name="phone" onChange={handleChange} />
            <Input
              placeholder="Contraseña"
              name="password"
              onChange={handleChange}
            />
            <Button onClick={handlesignUp}>Registrarse</Button>
          </Form>
        </Wrapper>
      ) : (
        <Wrapper>
          <TitleWrapper>
            <Title>
              <U>Iniciar Sesión</U>
            </Title>
            <Title onClick={() => setRegister(true)}>Registrarse</Title>
          </TitleWrapper>
          <Form>
            <InputLogin
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <InputLogin
              placeholder="Contraseña"
              name="password"
              onChange={handleChange}
            />
            <Button onClick={handleLogin}>Iniciar Sesión</Button>
            <Link>¿Olvidaste tu contraseña?</Link>
          </Form>
        </Wrapper>
      )}
    </Container>
  );
};

export default Login;
