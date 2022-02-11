import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { arrayTasks, arrayUsers } from "../../dummydata";
import { isMobile } from "react-device-detect";
import { useEffect, useState } from "react";
import {
  Container,
  ShowTasks,
  Wrapper,
  TaskTitle,
  TaskText,
  CreateTasks,
  Label,
  InputTitle,
  Input,
  CreateTitle,
  CreateContainer,
  ContainerCheckbox,
  Select,
  Option,
  Button,
  ButtonMobile,
} from "./tasks.styles";

const Tasks = () => {
  const [value, setValue] = useState(new Date());
  const [newTask, setnewTask] = useState(true);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  useEffect(() => {}, [value]);

  const renderContent = () => {
    if (isMobile) {
      return (
        <Container>
          {newTask ? (
            <ShowTasks>
              {arrayTasks.map((item) => (
                <Wrapper key={item.id}>
                  <TaskTitle>
                    Titulo:
                    <TaskText>{item.title}</TaskText>
                  </TaskTitle>
                  <TaskTitle>
                    Descripcion:
                    <TaskText>{item.description.slice(0, 50)}</TaskText>
                  </TaskTitle>
                  <TaskTitle>
                    Fecha:
                    <TaskText>{item.endDate}</TaskText>
                  </TaskTitle>
                  <TaskTitle>
                    Usuario:
                    <TaskText>Sebas</TaskText>
                  </TaskTitle>
                  <ContainerCheckbox>
                    <FormControl>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue={item.status}
                        name="radio-buttons-group"
                        style={{
                          color: "#ff5000",
                          flexDirection: "row",
                        }}
                        onChange={handleChange}
                      >
                        <FormControlLabel
                          value="iniciar"
                          control={<Radio style={{ color: "#ff5000" }} />}
                          label="Iniciar"
                        />
                        <FormControlLabel
                          value="en proceso"
                          control={<Radio style={{ color: "#ff5000" }} />}
                          label="En proceso"
                        />
                        <FormControlLabel
                          value="finalizada"
                          control={<Radio style={{ color: "#ff5000" }} />}
                          label="finalizada"
                        />
                      </RadioGroup>
                    </FormControl>
                  </ContainerCheckbox>
                </Wrapper>
              ))}
            </ShowTasks>
          ) : (
            <CreateTasks>
              <CreateContainer>
                <CreateTitle>
                  <TaskText>Agregar Nueva Tarea</TaskText>
                </CreateTitle>
                <Label>Title:</Label>
                <InputTitle
                  type="text"
                  minLength={4}
                  maxLength={30}
                  size={30}
                ></InputTitle>
                <Label>Descripcion:</Label>
                <Input
                  type="text"
                  minLength={4}
                  maxLength={100}
                  size={20}
                ></Input>
                <Label>Fecha a finalizar:</Label>
                <InputTitle
                  type="date"
                  value={value}
                  onChange={(e) => handleChange(e)}
                ></InputTitle>
                <Label>Usuario:</Label>
                <Select>
                  {arrayUsers.map((item) => (
                    <Option key={item.id}>
                      {item.name} {item.lastName}
                    </Option>
                  ))}
                </Select>
                <Button onClick={() => setnewTask(true)}>
                  Crear nueva Tarea
                </Button>
              </CreateContainer>
            </CreateTasks>
          )}
          <ButtonMobile onClick={() => setnewTask(false)}>
            agregar Tarea
          </ButtonMobile>
          <ButtonMobile onClick={() => setnewTask(true)}>
            Ver Tareas
          </ButtonMobile>
        </Container>
      );
    }
    return (
      <Container>
        <ShowTasks>
          {arrayTasks.map((item) => (
            <Wrapper key={item.id}>
              <TaskTitle>
                Titulo:
                <TaskText>{item.title}</TaskText>
              </TaskTitle>
              <TaskTitle>
                Descripcion:
                <TaskText>{item.description.slice(0, 50)}</TaskText>
              </TaskTitle>
              <TaskTitle>
                Fecha:
                <TaskText>{item.endDate}</TaskText>
              </TaskTitle>
              <TaskTitle>
                Usuario:
                <TaskText>Sebas</TaskText>
              </TaskTitle>
              <ContainerCheckbox>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue={item.status}
                    name="radio-buttons-group"
                    style={{
                      color: "#ff5000",
                      flexDirection: "row",
                    }}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="iniciar"
                      control={<Radio style={{ color: "#ff5000" }} />}
                      label="Iniciar"
                    />
                    <FormControlLabel
                      value="en proceso"
                      control={<Radio style={{ color: "#ff5000" }} />}
                      label="En proceso"
                    />
                    <FormControlLabel
                      value="finalizada"
                      control={<Radio style={{ color: "#ff5000" }} />}
                      label="finalizada"
                    />
                  </RadioGroup>
                </FormControl>
              </ContainerCheckbox>
            </Wrapper>
          ))}
        </ShowTasks>
        <CreateTasks>
          <CreateContainer>
            <CreateTitle>
              <TaskText>Agregar Nueva Tarea</TaskText>
            </CreateTitle>
            <Label>Title:</Label>
            <InputTitle
              type="text"
              minLength={4}
              maxLength={30}
              size={30}
            ></InputTitle>
            <Label>Description:</Label>
            <Input type="text" minLength={4} maxLength={100} size={20}></Input>
            <Label>Fecha a finalizar:</Label>
            <InputTitle
              type="date"
              value={value}
              onChange={(e) => handleChange(e)}
            ></InputTitle>
            <Label>Usuario:</Label>
            <Select>
              {arrayUsers.map((item) => (
                <Option key={item.id}>
                  {item.name} {item.lastName}
                </Option>
              ))}
            </Select>
            <Button onClick={() => setnewTask(true)}>Crear nueva Tarea</Button>
          </CreateContainer>
        </CreateTasks>
      </Container>
    );
  };
  return renderContent();
};

export default Tasks;
