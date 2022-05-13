export default function UserItem({ person }) {
        return (
          <tr key={person.id}>
            <td>{person.id}</td>
            <td>{person.fullName}</td>
            <td>{person.userName}</td>
            <td>{person.regDate}</td>
            <td>{person.user_Role}</td>
            <td>
              <a href=""> ویرایش </a> |<a href=""> حذف</a>
            </td>
          </tr>
        );
      }
      