import React, { Component } from "react";
import Home from "./components/Home/Home";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Details from "./components/Details/Details";
import Dashboard from "./components/Dashboard/Dashboard";
import AddItem from "./components/Dashboard/AddItem";
import Stores from "./components/Stores/Stores";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                      <Route exact path='/' component={Home}/>
                      <Route path='/login' component={Login}/>
                      <Route path='/signup' component={Signup}/>
                      <Route path='/detail' component={Details}/>
                      <Route path='/dashboard' component={Dashboard}/>
                      <Route path='/add/item' component={AddItem}/>
                      <Route path='/stores' component={Stores}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
