/** @format */
"use client";
import React from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { login } from "@/redux/features/login";
interface LoginProps {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Login: React.FC<LoginProps> = ({ onSubmit }) => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const loginState = useAppSelector((state) => state.loginReducer.user);
  const dispatch = useAppDispatch();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      (userName.trim() === "" && password.trim() === "") ||
      userName.trim() === "" ||
      password.trim() === ""
    ) {
      return alert("공백은 입력할 수 없습니다.");
    }

    const userData = { userName, password };
    dispatch(login(userData));
    //dispatch(login());
  };
  const logOutHandler = () => {
    if (loginState !== null) {
      dispatch(login(null));
    }
  };
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <input
          className="border mb-1"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="사용자 이름"
        />
        <input
          className="border"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
        />
        <button className="bg-slate-100 mt-2 mb-1" type="submit">
          로그인
        </button>
        <button className="bg-slate-100 " type="button" onClick={logOutHandler}>
          로그아웃
        </button>
      </form>
      {loginState !== null ? (
        <div className="mt-4">로그인되었습니다</div>
      ) : (
        <div className="mt-4">로그아웃상태입니다</div>
      )}
    </div>
  );
};

export default Login;
