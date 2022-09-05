import React from "react";
import { useUserContext } from "../components/useUserContext";
import { Container, Button } from "./styled";

function MainPage() {
  const user = useUserContext();

  const handleSignUp = (e) =>{
    e.preventDefault();
    window.location.href= "/signUp";
  };
  const handleLogin = (e) =>{
    e.preventDefault();
    window.location.href= "/loginForm";
  };
  const handleMemberSetting = (e) =>{
    e.preventDefault();
    window.location.href= "/memberSetting";
  };
  const handleFindID = (e) =>{
    e.preventDefault();
    window.location.href= "/findID";
  };
  const handleFindPassword = (e) =>{
    e.preventDefault();
    window.location.href= "/findPassword";
  };
  const handleWithdrawal = (e) =>{
    e.preventDefault();
    window.location.href= "/withdrawal";
  };



  return (
    <Container>
      <h1>메인페이지 제작에 대한 아이디어 받습니다 ㄳ</h1>
      <h1>Text-Makes-Image</h1>
      <div>
        <Button onClick={handleLogin}>로그인</Button>
        <Button onClick={handleSignUp}>회원 가입</Button>
        <Button onClick={handleMemberSetting}>회원 정보 수정</Button>
        <Button onClick={handleFindID}>아이디 찾기</Button>
        <Button onClick={handleFindPassword}>비밀번호 찾기</Button>
        <Button onClick={handleWithdrawal}>회원 탈퇴</Button>
      </div>
      {/* <div>
        <Link to="/fileUpload">파일업로드</Link>
      </div> */}
    </Container>
  );
}

export default MainPage;
