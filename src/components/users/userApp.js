import {useEffect, useState} from 'react'
import {Col,Row,Container} from "react-bootstrap";
import UsersList from "./usersList";
import Header from "./header";
import AddUser from "./addUser";

export default function UserApp() {
  const [users, setUsers] = useState('users' in localStorage ? JSON.parse(localStorage.users) : [])

  useEffect(() => {
    localStorage.users = JSON.stringify(users)
  }, [users])

  return (
    <Container>
      <Row>
        <Col>
          <Header />
          <AddUser setUsers={setUsers}  />
          <UsersList users={users} />
        </Col>
      </Row>
    </Container>
  );
}
      