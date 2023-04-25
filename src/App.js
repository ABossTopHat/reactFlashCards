import React,{useState, useEffect} from "react";
import { Route, Switch, useRouteMatch} from "react-router-dom";
import Layout from "./Home";
import "./App.css";
import Study from './Study'
import View from './View'
import Create from './CreateDeck'
import { listDecks } from "./utils/api";
/**
 * App is a wrapper for <Layout>, you should not need to change this file.
 */

function App() {

  const {url} = useRouteMatch()
  return (
    <div className="app-routes">
      <Switch>
        <Route path='/create'>
          <Create />
        </Route>
        <Route path="/" exact>
          <Layout />
        </Route>
        <Route path={`/decks/:deckId/study`} exact>
          <Study />
        </Route>
        <Route path={`/decks/:deckId/view`}>
          <View Layout={Layout()}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
