import axios from "axios";
import { toast } from "react-toastify";


export default function deleteUser(userid) {
  try {
    let res = axios.delete(
      "https://62849bf96b6c317d5ba76fbd.endapi.io/userList/" + userid
    );
    if (res) {
      toast.dismiss();
      toast.success("با موفقیت حذف شد ");
    }
  } catch (error) {
    toast.dismiss();
    toast.error("error.response.data.status ");
  }
}
