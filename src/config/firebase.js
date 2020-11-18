import React from "react";//reactパッケージをインポート
import * as firebase from 'firebase/app';//FirebaseApp(Firebase SDK)のインポート
import "firebase/auth";//Firebase Authenticationのインポート

const firebaseConfig = {
  apiKey: "AIzaSyBe89HC1jt0C7kYpBxvixSB-AsRJpBllZA",
  authDomain: "chatapp2-972c4.firebaseapp.com",
  databaseURL: "https://chatapp2-972c4.firebaseio.com",
  projectId: "chatapp2-972c4",
  storageBucket: "chatapp2-972c4.appspot.com",
  messagingSenderId: "755396197947",
  appId: "1:755396197947:web:4af04f0f01d237b6bb661e",
  measurementId: "G-3408SHMB9P"
};

firebase.initializeApp(firebaseConfig);

export default firebase;