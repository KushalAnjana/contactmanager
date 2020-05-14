import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./components/contacts/Contacts";
import AddContacts from "./components/contacts/AddContacts";
import EditContacts from "./components/contacts/EditContacts";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import test from "./components/test/test";

import { Provider } from "./context";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContacts} />
              <Route exact path="/contact/edit/:id" component={EditContacts} />
              <Route exact path="/about" component={About} />
              <Route exact path="/test" component={test} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
