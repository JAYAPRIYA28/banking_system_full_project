import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Home";
import Details from "./Details";
import Update from "./Update";
import "../index.css";
import Navbar from "./Navbar";



function App(){
    return (
        <div>
        <Navbar />
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/details" exact component={Details}/>
                <Route path="/:id/update" exact component={Update}/>
            </Switch>
        </Router>
            
        </div>
    );
}

export default App;