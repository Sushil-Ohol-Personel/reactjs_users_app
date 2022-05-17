import Modal from "react-bootstrap/Modal";
import React , {useEffect, useState}  from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import { v4 as uuid } from 'uuid';

export default function AddUserByModal() {
  
  //modal Show 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const getDataLs=()=>{
    const data = localStorage.getItem('users');
    if(data){
      return JSON.parse(data)
    }else{
      return []
    }
  }
  const [users , setUsers] = useState(getDataLs());

  //form submit users
  const handleAddUser = (e)=>{
    e.preventDefault();

    //make unique id
    const unique_id = uuid();
    const id = unique_id.slice(0,3);
  

    let user={
      id,
      fullName,
      userName,
      phoneNumber,
      userType 
    }
    setUsers([...users,user]);

    //make filed empty
    setfullName('');
    setuserName('');
    setphoneNumber('');
    setuserType('');
    handleClose ();

  }


  // input filed states

  const [fullName , setfullName ] = useState('');
  const [userName , setuserName ] = useState('');
  const [phoneNumber , setphoneNumber ] = useState('');
  const [userType , setuserType ] = useState('');


  //save date to LocalStorage
  useEffect (()=>{
    localStorage.setItem('users', JSON.stringify(users));
  },[users])


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
                  onChange={(e)=>setfullName(e.target.value)} 
                  value = {fullName}
                  placeholder="نام نام خانوادگی  را وارد کنید"
                />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>نام کاربری</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(e)=>setuserName(e.target.value)} 
                  value = {userName}
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
                  onChange={(e)=>setphoneNumber(e.target.value)} 
                  value = {phoneNumber}
                  placeholder="موبایل را وارد کنید"
                />
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="validationCustom04">
                <Form.Label>انتخاب گروه کاربری</Form.Label>
                <Form.Select  name ="userType" id="userType" onChange={(e)=>setuserType(e.target.value)}   value = {userType} aria-label="Default select example">
                  <option>---</option>
                  <option value="عضو">عضو</option>
                  <option value="مدیر">مدیر</option>
                  <option value="فروشنده">فروشنده</option>
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
