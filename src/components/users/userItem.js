import React from "react";
import deleteUser from './DeleteUser'

export default function UserItem(user) {
  return (
    <tr>
      <td>{user.fullName}</td>
      <td>{user.userName}</td>
      <td>{user.phoneNumber}</td>
      <td>{user.userType}</td>
      <td>
        <button className={"btn btn-primary btn-sm m-1"}>ویرایش</button>
        <button
          className={"btn btn-danger btn-sm m-1"}
          onClick={deleteUser.bind(this, user.id)}
        >
          حذف
        </button>
      </td>
    </tr>
  );
}
