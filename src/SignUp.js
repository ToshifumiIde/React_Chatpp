import React , {useState} from "react";
import firebase from "./config/firebase";

const SignUp =()=>{

  const [user , setUser ] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
      firebase.auth().createUserWithEmailAndPassword(email , password).catch(err =>{
        console.log(err);
      });
      if(!user || !email || !password){
        alert("必要事項が入力されていません");
      };

      setUser("");
      setEmail("");
      setPassword("");
  };

  return(
    <>
    <h2>SignUp</h2>
    <form action="" onSubmit={handleSubmit}>
      <div className="">
        <div className="">
          <label htmlFor="user">UserName</label>
            <input 
              type="text"
              id="user"
              name="user"
              placeholder="user"
              onChange={e=> {
                setUser(e.target.value);
              }}
              value={user}
            />
        </div>
      </div>
      <div className="">
        <div className="">
          <label htmlFor="email">E-mail</label>
          <input 
            type="text"
            id="email"
            name="email"
            placeholder="email"
            onChange={e=> {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </div>
      </div>
      <div className="">
        <div className="">
          <label htmlFor="password">Password</label>
          <input 
            type="text"
            id="password"
            name="password"
            placeholder="password"
            onChange={e=> {
              setPassword(e.target.value);
            }}
            value={password}
          />
        </div>
      </div>
      <button type="submit">SignUp</button>
    </form>
    </>
  )
};

export default SignUp;