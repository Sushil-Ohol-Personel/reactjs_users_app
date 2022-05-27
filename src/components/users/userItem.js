import React from "react";
import deleteUser from './DeleteUser'
import { toast } from "react-toastify";

export default function UserItem({user,setUsers}) {
  function handleDelete(){
    deleteUser(user.id).then(res=>{
      setUsers((prevUsers) => prevUsers.filter((item) => item.id !== user.id));
      toast.dismiss();
      toast.success("با موفقیت حذف شد ");
    }).catch(err=>{
      toast.dismiss();
      toast.error("error.response.data.status ");
    })
  }
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
          onClick={handleDelete}
        >
          حذف
        </button>
      </td>
    </tr>
  );
}
