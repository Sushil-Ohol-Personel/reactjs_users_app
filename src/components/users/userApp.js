import {Col,Row,Container} from "react-bootstrap";

import UsersList from "./usersList";
import Header from "./header";

export default function UserApp() {
        return (
          <Container>
            <Row>
              <Col>
                <Header />
                <UsersList />
              </Col>
            </Row>
          </Container>
        );
      }
      