import "./App.css";
import Article from "./Articles/Articles";
import NavBar from "./NavBar/NavBar";
import Form from "./Form/Form";
import React from "react";
import Accueil from "./NavBar/NavBar";
import Mes_articles from "./NavBar/NavBar";
import Contact from "./NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div id="background">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Article />
          </Route>
          <div className="Article-container">
            <Route path="/Form">
              <Form />
            </Route>
          </div>
          <Route path="/Form">
              <Contact />
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
