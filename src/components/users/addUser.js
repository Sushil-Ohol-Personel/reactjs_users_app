import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import { Button, Form, Col, validated, Row, InputGroup } from "react-bootstrap";
import Feedback from "react-bootstrap/Feedback";

export default function AddUserByModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <Form noValidate>
            <Row className="mb-4">
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>مشخصات</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="نام نام خانوادگی  را وارد کنید"
                />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>نام کاربری</Form.Label>
                <Form.Control
                  required
                  type="text"
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
                  placeholder="موبایل را وارد کنید"
                />
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="validationCustom04">
                <Form.Label>انتخاب گروه کاربری</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>---</option>
                  <option value="1">عضو</option>
                  <option value="2">مدیر</option>
                  <option value="3">فروشنده</option>
                </Form.Select>
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            پاک کردن
          </Button>
          <Button variant="primary" onClick={handleClose}>
            ذخیره
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
