import Table from "react-bootstrap/Table";
import UserItem from "./userItem";

let usersListItem = [
  {
    id: 1,
    fullName: "عطا ",
    userName: " ata bahari",
    regDate: "1374",
    user_Role: "مدیر",
  },
  {
    id: 2,
    fullName: "حسام موسوی ",
    userName: "Hesam Mousavi",
    regDate: "1376",
    user_Role: "کاربری",
  },
];

export default function UsersList() {
  return (
    <div className="mt-2">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>نام نام خانوادگی</th>
            <th>نام کاربری</th>
            <th>زمان عضویت</th>
            <th>نوع کاربری</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {usersListItem.map((user) => (<UserItem person={user} />))}
        </tbody>
      </Table>
    </div>
  );
}
