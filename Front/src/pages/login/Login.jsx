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
import { useDispatch, useSelector } from "react-redux";
import { login, signUp, errorCleanedLogin } from "../../redux/actions/apiCalls";
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";

if (typeof window !== "undefined") {
  injectStyle();
}
const Login = () => {
  const [register, setRegister] = useState(false);
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  const backendError = useSelector((state) => state.error.message);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  useEffect(() => {
    if (backendError?.length) {
      toast.dark(backendError);
      errorCleanedLogin(dispatch);
    }
  }, [backendError, dispatch]);
  const handleLogin = (e) => {
    e.preventDefault(e);
    login(dispatch, inputs);
  };
  const handlesignUp = (e) => {
    e.preventDefault(e);
    signUp(dispatch, inputs);
  };
  const handleRegister = (e) => {
    e.preventDefault(e);
    setInputs({});
    setRegister(false);
  };
  return (
    <Container>
      {register ? (
        <Wrapper>
          <TitleWrapper>
            <Title onClick={(e) => handleRegister(e)}>Iniciar Sesión</Title>
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
      <ToastContainer
        closeOnClick
        progressStyle={{ backgroundColor: "#ff7000" }}
      />
    </Container>
  );
};

export default Login;
