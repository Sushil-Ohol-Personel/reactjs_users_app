import {Col,Row,Container} from "react-bootstrap";
import UsersList from "./usersList";
import Header from "./header";
import AddUser from "./addUser";


export default function UserApp() {
        return (
          <Container>
            <Row>
              <Col>
                <Header />
                <AddUser  />
                <UsersList />
              </Col>
            </Row>
          </Container>
        );
      }
      