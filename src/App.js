import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Room from "./Room";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";//reactでUIと

//react-router-domのインポート完了

const App = () =>{
  return(
    <>
    <h1>ChatRoom</h1>
    <Router>
      <Switch>
        <Route exact path="/" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/room" component={Room} />
    </Switch>
    </Router>
    </>
  )
};

export default App;