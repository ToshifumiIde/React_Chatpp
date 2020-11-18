import React , {useState} from "react";
import firebase from "./config/firebase";


const Login =()=>{

  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const handleSubmit =(e)=>{
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email , password).catch(err =>{
      console.log(err);
    })
  };


  return(
    <>
    <h2>Login</h2>
    <form action="" onSubmit={handleSubmit}>
      <div className="">
        <lavel htmlfor="email">E-mail</lavel>
      <input 
        type="text"
        id="email"
        name="email"
        placeholder="email"
        onChange={(e)=>{
          setEmail(e.target.value);
        }}
        value={value}
        />
      </div>
      <div className="">
        <lavel htmlfor="password">Pasword</lavel>
      <input 
        type="text"
        id="password"
        name="password"
        placeholder="password"
        onChange={(e)=>{
          setPassword(e.target.value);
        }}
      />
      </div>
      <button type="submit">Login</button>
    </form>
    </>
  )
};

export default Login;