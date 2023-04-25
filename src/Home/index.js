import React, {useState, useEffect} from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import {Link, useRouteMatch, Switch, Route} from "react-router-dom";
import {listDecks, deleteDeck} from '../utils/api/index'

function Layout() {
  
  const [decks, setDecks] = useState([]);
useEffect( () => {
  listDecks().then(data => setDecks(data));
}, [])
  const {url} = useRouteMatch()
function deleteHandler(e){
 deleteDeck(e.target.id)
}
  return (
    <>
      <Header />
      <div className="container">
        <Link className="btn" to='/create'>Create Deck</Link>
          <Switch>
            <Route>
            {decks.map(deck =>{
          return(
            <div id="container">
                <h3>{deck.name}</h3>
                <p>{deck.description}</p>
                 <Link className='btn' to={`/decks/${deck.id}/view`}>View</Link>
                 <Link className='btn' to={`/decks/${deck.id}/study`}>Study</Link>
                 <button className='btn'id={deck.id} onClick={deleteHandler}>delete</button>
                 </div>)
          })}
            </Route>
        {/* TODO: Implement the screen starting here */}
        <Route>
          <NotFound />
        </Route>
          </Switch>
         
      </div>
    </>
  );
}

export default Layout;
