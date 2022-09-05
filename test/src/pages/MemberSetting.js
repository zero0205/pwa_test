import React, { useState } from "react";
import { Container, Input, Button } from "./styled";

function MemberSettingForm() {
    //input에서 입력한 아이디와 비밀번호 정보를 담기위한 state
    const [account, setAccount] = useState({
        id: "",
        password: "",
        newpassword: "",
        nickname: "",
    });
    const [pwChk, setPwChk] = useState(false);


    //input에 입력하면 자동적으로 account state값 변경
    const onChangeAccount = (e) => {
        setAccount({
            ...account,
            [e.target.name]: e.target.value,
        });
    };

    //패스워드 확인
  const onChangePwChk = (e) => {
    setPwChk(e.target.value);
    if (e.target.value == account.password) {
      setPwChk(true);
    } else {
      setPwChk(false);
    }
  };

    //동기식으로 로그인정보를 통신하여 출력
    const onSubmitAccount = async () => {
        try {
            //   const user = await fetchLogin(account);
        } catch (error) {
            //실패하면 throw new Error("") 값 출력
            window.alert(error);
        }
    };
    return (
        <Container>
            <h1>회원 정보 수정</h1>
            <Input id="uid" name="uid" placeholder="ID" onChange={onChangeAccount} />
            <div>
                <Input id="nickname" name="nickname" placeholder="Nickname" onChange={onChangeAccount} />
                <Button>닉네임 변경</Button>
            </div>
            <Input
                id="oldPassword"
                name="password"
                type="password"
                placeholder="Password"
                onChange={onChangeAccount}
            />
            <Input
                id="newPassword"
                name="newPassword"
                type="password"
                placeholder="New Password"
                onChange={onChangeAccount}
            />
            <Input
                id="newPasswordCheck"
                name="newPasswordCheck"
                type="password"
                placeholder="New Password Check"
            />
            <Button onClick={onChangeAccount}>비밀번호 변경</Button>
        </Container>
    );
}

export default MemberSettingForm;
