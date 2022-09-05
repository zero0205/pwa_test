// axios 라이브러리
import axios from "axios";

export const fetchSignUp = async (props) => {
  const res = await axios("/add/user", {
    method: "POST",
    data: {
      'uid': props.uid,
      'password': props.password,
      'nickname': props.nickname,
    },
    headers: new Headers(),
  });

  if (res.data) {
    alert("Sign Up Success!");
    return window.location.reload();
  }
};