import {
  Container,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Title,
  Info,
  Tbody,
  UserContainer,
} from "./users.styles";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsersReq, getTaskReq } from "../../redux/actions/apiCalls";

const Users = () => {
  const user = useSelector((state) => state.currentUser);
  const [users, setUsers] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    if (user.isAdmin === true) {
      getAllUsersReq(dispatch, (response) => {
        const sortUsers = response.slice().sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        setUsers(sortUsers);
      });
    }
  }, []);

  return (
    <UserContainer>
      <Container>
        <Table>
          <Thead>
            <Tr>
              <Th>
                <Title> Nombre</Title>
              </Th>
              <Th>
                <Title> Celular</Title>
              </Th>
              <Th>
                <Title> email</Title>
              </Th>

              <Th>
                <Title> Status</Title>
              </Th>
            </Tr>
          </Thead>
          {users.map((item) => (
            <Tbody key={item._id}>
              <Tr>
                <Td>
                  <Info>
                    {item.name} {item.lastName}
                  </Info>
                </Td>
                <Td>
                  <Info>{item.phone}</Info>
                </Td>
                <Td>
                  <Info>{item.email}</Info>
                </Td>

                <Td>
                  <Info>{item.isAdmin.toString()}</Info>
                </Td>
              </Tr>
            </Tbody>
          ))}
        </Table>
      </Container>
    </UserContainer>
  );
};

export default Users;
