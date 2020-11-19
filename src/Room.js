import React , { useState , useEffect } from "react";//reactパッケージのインストール
import styled from "styled-components";
import firebase from "../src/config/firebase";

const Room =()=> {
  
  //useStateでのmessageの初期値設定
  const [messages , setMessages ] =useState(
    [
      {
      user:"John",
      content:"example",
      }
    ]
  );

  //useStateでの入力値(value)の初期設定
  const [value , setValue ] = useState("");

  //form送信時の関数
  const handleSubmit = (e)=> {
    e.preventDefault();
    if(!value){
      alert("chatを入力してください");
    };//valueが空の場合、alertを表示
    setMessages([
      ...messages,
      {
        user:"John",
        content:value,
      },
    ]);//form送信時にmessagesの分割代入と、オブジェクトのcontentにuseStateのvalueを格納
    setValue("");//formが送信された場合、フォームの中の値を空にする
  };

  return(
  <RoomContainer>
    <h2>Room</h2>
  <p>Logged In User:{user ? user.email : "...Loading"}</p>
        <ul>
        {
          messages.map((message , index) => {
            return (
              <MessageItem key={index}>
                <span>User:{message.user}</span>
                <span>{message.content}</span>
              </MessageItem>
            )
          })
        }
        </ul>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          onChange={ e => {
            setValue(e.target.value);//入力値が変更されるたびに、eventのtarget(今回はinput)のvalue(入力値)をsetValueに格納する
          }}
          value={value}//form送信後にinputの値を空にする
          />
        <button type="submit">Send</button>
    </form>
    <button>Logout</button>
  </RoomContainer>
  )
};

const RoomContainer = styled.div`
  background-color:#eee;
  margin:0 auto;
  text-align:center;
  ul{
    list-style:none;
  }
`;

const MessageItem = styled.li`
text-decoration:none;
`;


export default Room;