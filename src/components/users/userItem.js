export default function UserItem({fullName, userName, phoneNumber, userType}) {
  return (
    <tr>
      <td>{fullName}</td>
      <td>{userName}</td>
      <td>{phoneNumber}</td>
      <td>{userType === 0 ? 'عضو' : 'مدیر'}</td>
      <td>
        <a href="rookcet.ir"> ویرایش </a> | <a> حذف</a>
      </td>
    </tr>
  );
}
      