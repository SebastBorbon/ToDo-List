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

const Login = () => {
  const [register, setRegister] = useState(false);

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
            <Input placeholder="Nombre" />
            <Input placeholder="Apellido" />
            <Input placeholder="Email" />
            <Input placeholder="Celular" />
            <Input placeholder="Contraseña" />
            <Button>Registrarse</Button>
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
            <InputLogin placeholder="Email" />
            <InputLogin placeholder="Contraseña" />
            <Button>Iniciar Sesión</Button>
            <Link>¿Olvidaste tu contraseña?</Link>
          </Form>
        </Wrapper>
      )}
    </Container>
  );
};

export default Login;
