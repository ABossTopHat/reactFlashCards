import React, {useState, useEffect} from "react";
import {Link, useParams, useHistory} from "react-router-dom";

import { readDeck } from "./utils/api";

//
export default function Study(){
  const {deckId} = useParams()
  const [deck, setDeck] = useState({name:"Loading", cards:[{front:"", back:''}]});
  const[show, setShow] = useState(true)
  const [card, setCard] = useState(0)
  const history = useHistory()
  useEffect( () => {
  readDeck(deckId).then(setDeck);
}, [deckId])

function Flip(e){
  if(show === true){
    setShow(false)
  }
  if(show === false){
    setShow(true)
  }
}
function Next(e){
  if(card < deck.cards.length - 1){
    setCard(card + 1)
    setShow(true)
  }
  if(card === deck.cards.length -1){
    if(window.confirm('Restart?')){
    setCard(0)
    setShow(true)
  }
    else{
      history.push('/')
    }
  }
}
function Front(){
  return(  
    <div>
   
    <div className="container">
      <Link className='btn' to='/'>Home</Link>
    </div>
    <div>
      {deck.cards[card].front}
    </div>
    <div className="container">
    <button className="btn" onClick={Flip}>Flip</button>
    </div>
    
    </div>)
}
function Back(){
  return(  
    <div>
  
    <div className="container" >
      <Link className='btn' to='/'>Home</Link>
    </div>
    <div key=''>
      {deck.cards[card].back}
    </div>
    <div className="container" >
      <button className="btn" onClick={Flip}>Flip</button>
      <button className="btn" onClick={Next}>Next</button>
    </div>
    </div>)
}

/*Everything before this point is setup for what is actually returned */
if(show === true){
  return Front()
}
if(show === false){
  return Back()
}
  
}