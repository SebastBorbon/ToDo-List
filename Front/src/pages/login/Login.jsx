import { useState, useEffect } from "react";
import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
  Link,
} from "./login.styles";

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Iniciar Sesión</Title>
        <Form>
          <Input placeholder="Email" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>¿Olvidaste tu contraseña?</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
