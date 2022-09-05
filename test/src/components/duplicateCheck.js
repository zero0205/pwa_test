import axios from "axios";

export const duplicateCheck = async (props) => {
  let flag = false;
  axios.get("/get/user").then(function (response) {
    response.data.map(function (el) {
      if (el.uid === props.uid) {
        window.alert("Duplicated ID!");
        flag = true;
        return window.location.reload();
      }
    });
    if (!flag) {
      window.alert("You can use this ID!");
    }
  });
};
