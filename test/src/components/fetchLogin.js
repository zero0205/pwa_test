// axios 라이브러리
import axios from "axios";

export const fetchLogin = async (props) => {
  let flag = false;

  axios.get("/get/user").then(function (response) {
    response.data.map(function(el){
      if(el.uid === props.uid && el.password === props.password){
        flag = true;
        return window.location.replace("/");
      }
    })
    
    if(!flag){
      window.alert("Please check your ID and Password again");
    }
  });
}