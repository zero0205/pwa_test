import React, { useState } from "react";
import { fetchLogin } from "../components/fetchLogin";
import { Container, Input, Button } from "./styled";

function LoginForm() {
  //input에서 입력한 아이디와 비밀번호 정보를 담기위한 state
  const [account, setAccount] = useState({
    id: "",
    password: "",
    nickname: "",
  });

  //input에 입력하면 자동적으로 account state값 변경
  const onChangeAccount = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  //동기식으로 로그인정보를 통신하여 출력
  const onSubmitAccount = async () => {
    try {
      const user = await fetchLogin(account);
    } catch (error) {
      //실패하면 throw new Error("") 값 출력
      window.alert(error);
    }
  };
  return (
    <Container>
      <h1>Text-to-Image</h1>
      <Input id="uid" name="uid" placeholder="ID" onChange={onChangeAccount} />
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        onChange={onChangeAccount}
      />
      <Button onClick={onSubmitAccount}>로그인</Button>
      <div>
        <a href="/findID">아이디 찾기</a>
      </div>
      <div>
        <a href="/findPassword">비밀번호 찾기</a>
      </div>
      <div>
        <a href="/withdrawal">회원 탈퇴</a>
      </div>

    </Container>
  );
}

export default LoginForm;
