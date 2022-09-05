import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import SignUp from "./pages/SignUp";
import MemberSettingForm from "./pages/MemberSetting";
import MainPage from "./pages/MainPage";
import FindID from "./pages/FindID";
import FindPassword from "./pages/FindPassword";
import Withdrawal from "./pages/Withdrawal";
import FileUpload from "./pages/FileUpload";

function RoutesPage() {
  return (
    <div>
      <Routes>
        {/* <Route exact path="/loginForm" element={<LoginForm />} />
        <Route exact path="/signUp" element={<SignUp />} />
        <Route exact path="/memberSetting" element={<MemberSettingForm />} />
        <Route exact path="/findID" element={<FindID />} />
        <Route exact path="/findPassword" element={<FindPassword />} />
        <Route exact path="/withdrawal" element={<Withdrawal />} />
        <Route exact path="/fileUpload" element={<FileUpload />} />
        <Route exact path="/" element={<MainPage />} /> */}
      </Routes>
    </div>
  );
}
export default RoutesPage;