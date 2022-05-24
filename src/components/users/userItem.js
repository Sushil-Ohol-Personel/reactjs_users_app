


export default function UserItem({id,fullName, userName, phoneNumber, userType}) {
  return (
    <tr>
      <td>{fullName}</td>
      <td>{userName}</td>
      <td>{phoneNumber}</td>
      <td>{userType}</td>
      <td>
        <a href="rookcet.ir"> ویرایش </a> | <a href={id} > حذف</a>
      </td>
    </tr>
  );
}
      