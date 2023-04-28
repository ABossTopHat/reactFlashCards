import React, {useState, useEffect} from "react";
import {Link, useRouteMatch, Switch, Route} from "react-router-dom";
import {listDecks, deleteDeck} from './utils/api/index'

export default function DeckList(){
  const [decks, setDecks] = useState([{name:'loading', cards:[{}], description:'loading' }]);

    const getDecks= ()=> {
      listDecks().then(data => setDecks(data));
    }
      const {url} = useRouteMatch()

    function deleteHandler(e){
     if (window.confirm('are you sure you want to delete?')){
     deleteDeck(e.target.id).then(()=>getDecks())}
     else{ alert('nothing was deleted')}
    }
  
  const list = decks.map((deck) => (
                <div key={deck.id} id="container" >
                    <h3>{deck.name}</h3>
                    <h4>{deck.cards.length} cards</h4>
                    <p>{deck.description}</p>
                     <Link className='btn' to={`/decks/${deck.id}`}>View</Link>
                     <Link className='btn' to={`/decks/${deck.id}/study`}>Study</Link>
                     <button type="submit" className='btn'id={deck.id} onClick={deleteHandler}>delete</button>
                </div>))
  
      return ( 
        <div>
         <Link className="btn" to='/decks/new'>Create Deck</Link>
                {list1}
         </div>
    )
}