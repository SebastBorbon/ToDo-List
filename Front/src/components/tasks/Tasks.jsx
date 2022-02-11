import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useDispatch, useSelector } from "react-redux";
import { arrayTasks, arrayUsers } from "../../dummydata";
import { isMobile } from "react-device-detect";
import { useEffect, useState } from "react";
import {
  getAllUsersReq,
  getTaskReq,
  postTask,
  deletTaskReq,
  getAllTasksReq,
  editTask,
} from "../../redux/actions/apiCalls";
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
  BtnBorrar,
} from "./tasks.styles";
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";

if (typeof window !== "undefined") {
  injectStyle();
}

const Tasks = () => {
  const user = useSelector((state) => state.currentUser);
  const [value, setValue] = useState(new Date());
  const [newTask, setnewTask] = useState(true);
  const [allUsers, setAllUsers] = useState([]);
  const [allTasks, setAllTasks] = useState([]);
  const [formErrors, setFormErrors] = useState({
    error: "",
  });
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    date: null,
    user: null,
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const createTask = (e, data) => {
    e.preventDefault();
    if (data.user) {
      postTask(data, (response) => {
        setAllTasks([...allTasks, response]);
      });
      toast.dark("Tarea creada!");

      setFormErrors({ error: "" });
      setTaskData({
        title: "",
        description: "",
        date: null,
        user: null,
      });
    } else {
      setFormErrors({ ...formErrors, error: "Selecciona un usuario" });
    }
  };

  useEffect(() => {
    getTaskReq(dispatch, user._id);
    if (user?.isAdmin) {
      getAllUsersReq(dispatch, (response) => {
        setAllUsers(response);
      });
      getAllTasksReq(dispatch, (response) => {
        setAllTasks(response);
      });
    } else {
      getTaskReq(dispatch, user._id, (response) => {
        setAllTasks(response);
      });

      setAllUsers([user]);
    }
  }, []);

  const handleDelete = (id) => {
    deletTaskReq(dispatch, id, () => {
      setAllTasks(allTasks.filter((elem) => elem._id !== id));
    });
    toast.dark("Tarea borrada!");
  };
  const handleAccepted = (id) => {
    editTask(id, (response) => {
      copyTask = allTasks;
      const index = allTasks.findIndex((el) => el._id == response);
      copyTask[index] = { ...copyTask[index], accepted: true };
      setAllTasks(copyTask);
    });
  };
  const renderContent = () => {
    if (isMobile) {
      return (
        <Container>
          {newTask ? (
            <ShowTasks>
              {allTasks.map((item) => (
                <Wrapper key={item._id}>
                  <TaskTitle>
                    Titulo:
                    <TaskText>{item.title.slice(0, 10)}</TaskText>
                  </TaskTitle>
                  <TaskTitle>
                    Descripcion:
                    <TaskText>{item.description.slice(0, 30)}</TaskText>
                  </TaskTitle>
                  <TaskTitle>
                    Fecha:
                    <TaskText>{item.endDate.slice(0, 40)}</TaskText>
                  </TaskTitle>
                  <TaskTitle>
                    Usuario:
                    <TaskText>{item.userId?.name}</TaskText>
                  </TaskTitle>
                  <ContainerCheckbox>
                    <BtnBorrar onClick={() => handleAccepted(item._id)}>
                      aceptar
                    </BtnBorrar>
                    <BtnBorrar onClick={() => handleDelete(item._id)}>
                      borrar
                    </BtnBorrar>
                  </ContainerCheckbox>
                </Wrapper>
              ))}
            </ShowTasks>
          ) : (
            <CreateTasks>
              <form onSubmit={(e) => createTask(e, taskData)}>
                <CreateContainer>
                  <CreateTitle>
                    <TaskText>Agregar Nueva Tarea</TaskText>
                  </CreateTitle>
                  <Label>Title:</Label>
                  <InputTitle
                    type="text"
                    required={true}
                    value={taskData.title}
                    onChange={(e) => {
                      e.preventDefault();
                      setTaskData({ ...taskData, title: e.target.value });
                    }}
                    name="title"
                    minLength={4}
                    maxLength={10}
                    size={30}
                  ></InputTitle>
                  <Label>Descripcion:</Label>
                  <Input
                    type="text"
                    value={taskData.description}
                    onChange={(e) => {
                      e.preventDefault();
                      setTaskData({ ...taskData, description: e.target.value });
                    }}
                    minLength={4}
                    maxLength={30}
                    size={20}
                  ></Input>
                  <Label>Fecha a finalizar:</Label>
                  <InputTitle
                    type="date"
                    required={true}
                    onChange={(e) => {
                      e.preventDefault();
                      setTaskData({ ...taskData, date: e.target.value });
                    }}
                  ></InputTitle>
                  <Label>Usuario:</Label>
                  <Select
                    required={true}
                    onChange={(e) => {
                      e.preventDefault();
                      setTaskData({ ...taskData, user: e.target.value });
                    }}
                  >
                    <Option disabled selected value>
                      --select an option--
                    </Option>
                    {allUsers.map((item) => (
                      <Option key={item._id} value={item._id}>
                        {item.name} {item.lastName}
                      </Option>
                    ))}
                  </Select>
                  <Label>{formErrors.error}</Label>
                  <Button type="submit">Crear nueva Tarea</Button>
                </CreateContainer>
              </form>
            </CreateTasks>
          )}
          <ButtonMobile onClick={() => setnewTask(false)}>
            agregar Tarea
          </ButtonMobile>
          <ButtonMobile onClick={() => setnewTask(true)}>
            Ver Tareas
          </ButtonMobile>
          <ToastContainer
            closeOnClick
            progressStyle={{ backgroundColor: "#ff7000" }}
          />
        </Container>
      );
    }
    return (
      <Container>
        <ShowTasks>
          {allTasks.map((item) => (
            <Wrapper key={item._id}>
              <TaskTitle>
                Titulo:
                <TaskText>{item.title.slice(0, 10)}</TaskText>
              </TaskTitle>
              <TaskTitle>
                Descripcion:
                <TaskText>{item.description.slice(0, 20)}</TaskText>
              </TaskTitle>
              <TaskTitle>
                Fecha:
                <TaskText>{item.endDate.slice(0, 20)}</TaskText>
              </TaskTitle>
              <TaskTitle>
                Usuario:
                <TaskText>
                  {item.userId?.name}
                  {item.userId?.lastName}
                </TaskText>
              </TaskTitle>
              <ContainerCheckbox>
                <BtnBorrar onClick={() => handleAccepted(item._id)}>
                  aceptar
                </BtnBorrar>
                <BtnBorrar onClick={() => handleDelete(item._id)}>
                  borrar
                </BtnBorrar>
              </ContainerCheckbox>
            </Wrapper>
          ))}
        </ShowTasks>

        <CreateTasks>
          <form onSubmit={(e) => createTask(e, taskData)}>
            <CreateContainer>
              <CreateTitle>
                <TaskText>Agregar Nueva Tarea</TaskText>
              </CreateTitle>
              <Label>Title:</Label>
              <InputTitle
                type="text"
                required={true}
                value={taskData.title}
                onChange={(e) => {
                  e.preventDefault();
                  setTaskData({ ...taskData, title: e.target.value });
                }}
                name="title"
                minLength={4}
                maxLength={10}
                size={10}
              ></InputTitle>
              <Label>Descripcion:</Label>
              <Input
                type="text"
                value={taskData.description}
                onChange={(e) => {
                  e.preventDefault();
                  setTaskData({ ...taskData, description: e.target.value });
                }}
                minLength={4}
                maxLength={100}
                size={20}
              ></Input>
              <Label>Fecha a finalizar:</Label>
              <InputTitle
                type="date"
                required={true}
                onChange={(e) => {
                  e.preventDefault();
                  setTaskData({ ...taskData, date: e.target.value });
                }}
              ></InputTitle>
              <Label>Usuario:</Label>
              <Select
                required={true}
                onChange={(e) => {
                  e.preventDefault();
                  setTaskData({ ...taskData, user: e.target.value });
                }}
              >
                <Option disabled selected value>
                  --select an option--
                </Option>
                {allUsers.map((item) => (
                  <Option key={item._id} value={item._id}>
                    {item.name} {item.lastName}
                  </Option>
                ))}
              </Select>
              <Label>{formErrors.error}</Label>
              <Button type="submit">Crear nueva Tarea</Button>
            </CreateContainer>
          </form>
        </CreateTasks>
        <ToastContainer
          closeOnClick
          progressStyle={{ backgroundColor: "#ff7000" }}
        />
      </Container>
    );
  };
  return renderContent();
};

export default Tasks;
