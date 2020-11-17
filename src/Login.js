import React from "react";

const Login =()=>{
  return(
    <>
    <h2>ログイン</h2>
    <form action="">
      <div className="">
        <lavel htmlfor="email">E-mail</lavel>
      <input 
        type="text"
        id="email"
        name="email"
        placeholder="email"
        />
      </div>
      <div className="">
        <lavel htmlfor="password">Pasword</lavel>
      <input 
        type="text"
        id="password"
        name="password"
        placeholder="password"
      />
      </div>
      <button type="submit">Login</button>
    </form>
    </>
  )
};

export default Login;