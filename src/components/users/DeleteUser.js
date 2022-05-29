import axios from "axios";

export default async function deleteUser(userid) {
    return await axios.delete(
      "https://62849bf96b6c317d5ba76fbd.endapi.io/userList/" + userid
    );
}
