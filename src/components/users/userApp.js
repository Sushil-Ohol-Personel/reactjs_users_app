import { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import UsersList from "./UsersList";
import Header from "../Layout/Header";
import AddUser from "./AddUser";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import { toast, ToastContainer } from "react-toastify";



export default function UserApp() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = async () => {
    let users = await axios.get(
      "https://62849bf96b6c317d5ba76fbd.endapi.io/userList"
    );
    setUsers(users?.data?.data);
  };

  return (
    <div className="App" dir="rtl">
    <Container>
      <Row>
        <Col>
          <Header />
          <AddUser setUsers={setUsers} />
          <UsersList users={users} />
        </Col>
      </Row>
      <ToastContainer closeButton={false} position="bottom-right" />

    </Container>
    </div>
  );
}


