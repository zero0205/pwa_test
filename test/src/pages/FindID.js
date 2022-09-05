import React from "react";
import { Container, Input, Button } from "./styled";

function FindID(){
    const moveLogin = (e) =>{
        e.preventDefault();
        window.location.href= "/LoginForm";
      };
    return (
        <div>
        <h1>아이디 찾기</h1>
        <Input id="email" placeholder="Email"/>
        <Button>인증번호 발송</Button>
        <Input id="certification_number" placeholder="인증번호"/>
        <Button>아이디 찾기</Button>
        <Button onClick={moveLogin}>로그인 화면으로 돌아가기</Button>
        </div>
    );
}

export default FindID;