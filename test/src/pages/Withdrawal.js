import React, { useState } from "react";
import { Container, Input, Button } from "./styled";

function Withdrawal(){
    const [pw, setPW] = useState("")

    const onChangePW = (e) => {
        setPW(e.target.value)
    }
    return (
        <div>
            <h1>회원 탈퇴</h1>
            <Input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={onChangePW}
        />
            <Button>회원 탈퇴</Button>
        </div>
    );
}

export default Withdrawal;