export default function UserItem({ user  }) {
        return (
          <tr key={user.id}>
            <td>{user.fullName}</td>
            <td>{user.userName}</td>
            <td>{user.phoneNumber}</td>
            <td>{user.userType}</td>
            <td>
              <a href="rookcet.ir"> ویرایش </a> |<a> حذف</a>
            </td>
          </tr>
        );
      }
      