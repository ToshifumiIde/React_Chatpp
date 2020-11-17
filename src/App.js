import React from "react";
import Login from "./Login";
import SignIn from "./SignIn";
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
    <h1>こんにちは！</h1>
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/room" component={Room} />
    </Switch>
    </Router>
    </>
  )
};

export default App;