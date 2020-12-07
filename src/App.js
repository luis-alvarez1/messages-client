import React from "react";
import "./App.css";
import { BrowserRouter as ReactRouter, Route, Switch } from "react-router-dom";
import { MessageList } from "./components/MessageList";
import { MessageForm } from "./components/MessageForm";
import "bootswatch/dist/lux/bootstrap.min.css";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <ReactRouter>
        <NavBar />
        <div className="container p-4">
          <Switch>
            <Route exact path="/" component={MessageList} />
            <Route path="/new" component={MessageForm} />
          </Switch>
        </div>
      </ReactRouter>
    </>
  );
}

export default App;
