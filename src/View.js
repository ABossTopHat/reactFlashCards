import React,{useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import Header from './Home/Header'
import { readDeck, deleteCard } from "./utils/api";
import CardList from "./Card/List"

function DeckView() {
  const {deckId} = useParams()
  const [deck, setDeck] = useState({name:"Loading", cards:[{front:"", back:''}]})
  useEffect( () => {
    readDeck(deckId).then(setDeck);
  }, [deckId])
  const getDeck = ()=>{
    readDeck(deckId).then(setDeck)
  }

  function deleteCardHandler(e){
    deleteCard(e.target.id).then(getDeck)
  }
  
  return(  
  <div>
  <Header />
  <div className="container">
  <Link className='btn' to='/'>Home</Link>
  </div>
 
  <div className="container">
    <h2 >Name: {deck.name}</h2>
    <h4>Description: {deck.description}</h4>
    <Link to={`/decks/${deckId}/edit`} className="btn">Edit</Link>
    <Link to={`/decks/${deckId}/cards/new`} className="btn">Add Cards</Link>
  </div>
  <div>
    <CardList deck={deck} onCardDelete={deleteCardHandler} />
  </div>

  </div>)
  
}

export default DeckView;