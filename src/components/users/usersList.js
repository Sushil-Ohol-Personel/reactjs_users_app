import Table from "react-bootstrap/Table";
import UserItem from "./userItem";


//getting userList From localStorage
export default function UsersList({users}) {

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
          {users.map((user) => (<UserItem key={user.id} {...user} />))}
        </tbody>
        <tfoot>
          {!users.length ? <tr><td colSpan="6" className="my-2" >اطلاعاتی جهت نمایش وجود ندارد - به روی اضافه کردن کلیک کنید</td></tr> : null}
        </tfoot>
      </Table>
    </div>
    </>
  );

}
