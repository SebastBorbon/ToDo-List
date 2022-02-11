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
import { arrayUsers } from "../../dummydata";

const Users = () => {
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
                <Title> Tareas</Title>
              </Th>
              <Th>
                <Title> Status</Title>
              </Th>
            </Tr>
          </Thead>
          {arrayUsers.map((item) => (
            <Tbody key={item.id}>
              <Tr>
                <Td>
                  <Info>
                    {item.name} {item.lastName}
                  </Info>
                </Td>
                <Td>
                  <Info>{item.cellphone}</Info>
                </Td>
                <Td>
                  <Info>{item.email}</Info>
                </Td>
                <Td>
                  <Info>{item.tasks}</Info>
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
