import React from "react";

const SignUp =()=>{
  return(
    <>
    <h2>サインアップ
    </h2>
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
      <button type="submit">SignUp</button>
    </form>
    </>
  )
};

export default SignUp;