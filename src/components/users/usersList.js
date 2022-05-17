import Table from "react-bootstrap/Table";
import UserItem from "./userItem";


//getting userList From localStorage
const userListData = localStorage.getItem('users');
const usersListItem =  JSON.parse(userListData);




export default function UsersList() {

  return (
    <>
    <div className="mt-2">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>نام نام خانوادگی</th>
            <th>نام کاربری</th>
            <th>زمان عضویت</th>
            <th>نوع کاربری</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          { usersListItem.length
             ? usersListItem.map((users) => (<UserItem user={users} />))
             :  <th colspan="6" className="my-2" > اطلاعاتی جهت نمایش وجود ندارد - به روی اضافه کردن کلیک کنید  </th> 
           }
         
        </tbody>
      </Table>
    </div>
    </>
  );

}
