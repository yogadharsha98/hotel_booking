import React from "react";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/NavBar";
import Login from "../../components/Login/Login";

const LoginScreen = () => {
  return (
    <>
      <NavBar />
      <Header type="list" />
      <Login />
      
    </>
  );
};

export default LoginScreen;
