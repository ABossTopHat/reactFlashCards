import React, {useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom'
import { readDeck } from "./utils/api";


import CardForm from "./CardForm";
export default function CardCreate(){
    const {deckId} = useParams()
    const [deck, setDeck] = useState({ cards:[] })
  useEffect(getDeck, [deckId])
  function getDeck() {
    readDeck(deckId).then(setDeck)
  }

    return(
       <div>
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home" /> Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link to={`/decks/${deckId}`}>
                {deck.name}
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            New Card
          </li>
        </ol>
      </nav>
        <CardForm newCard={true}/>
       </div>
    )
}