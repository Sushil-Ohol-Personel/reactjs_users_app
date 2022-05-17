import Modal from "react-bootstrap/Modal";
import React , {useEffect, useState}  from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import { v4 as uuid } from 'uuid';

export default function AddUserByModal({setUsers}) {
  
  //modal Show 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState({
    fullName: '',
    userName: '',
    phoneNumber: '',
    userType: 0
  })

  const inputHandler = (key, value) => setData({...data, [key]: value})

  //form submit users
  const handleAddUser = (e)=>{
    e.preventDefault();
    setUsers(prevUsers => [{...data, id: uuid()}, ...prevUsers])
    handleClose()
  }


  return (
    <>
      <div className="my-2" style={{ float: "left" }}>
        <Button variant="primary" onClick={handleShow}>
          اضافه کردن
        </Button>
      </div>

      <Modal className="ModalfarsiFont" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>اضافه کردن </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddUser}>
            <Row className="mb-4">
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>مشخصات</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(e) => inputHandler('fullName', e.target.value)} 
                  value = {data.fullName}
                  placeholder="نام نام خانوادگی  را وارد کنید"
                />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>نام کاربری</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(e) => inputHandler('userName', e.target.value)} 
                  value = {data.userName}
                  placeholder="نام کاربری را وارد کنید"
                />
              </Form.Group>
            </Row>
            <Row className="mb-4">
              <Form.Group as={Col} md="6" controlId="validationCustom05">
                <Form.Label>موبایل</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(e) => inputHandler('phoneNumber', e.target.value)} 
                  value = {data.phoneNumber}
                  placeholder="موبایل را وارد کنید"
                />
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="validationCustom04">
                <Form.Label>انتخاب گروه کاربری</Form.Label>
                <Form.Select onChange={(e) => inputHandler('userType', e.target.value)}  value={data.userType} aria-label="Default select example">
                  <option value="0">عضو</option>
                  <option value="1">مدیر</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            پاک کردن
          </Button>
          <Button variant="primary" type="submit">
            ذخیره
          </Button>
        </Modal.Footer>
        </Form>

        </Modal.Body>
      
      </Modal>
    </>
  );
}
