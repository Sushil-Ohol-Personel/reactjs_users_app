import {useEffect, useState} from 'react'
import {Col,Row,Container} from "react-bootstrap";
import UsersList from "./usersList";
import Header from "./header";
import AddUser from "./addUser";
import axios from 'axios';


export default function UserApp() {

  const [users, setUsers] = useState('users' in localStorage ? JSON.parse(localStorage.users) : [])

  useEffect(() => {
    getUserList();
  }, [])

  const getUserList = async ()=>{
    let users = await axios.get('https://62849bf96b6c317d5ba76fbd.endapi.io/userList' );
    setUsers(users?.data?.data);
  }

  
  return (
    <Container>
      <Row>
        <Col>
          <Header />
          <AddUser setUsers={setUsers}  />
          <UsersList users={users}  />
        </Col>
      </Row>
    </Container>
  );
}
      