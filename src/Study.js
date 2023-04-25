import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import Header from './Home/Header'
import { readDeck } from "./utils/api";

//
export default function Study(){
  const {deckId} = useParams()
  const [decks, setDecks] = useState({name:"Loading", cards:[{front:"", back:''}]});
  const[show, setShow] = useState(true)
  const [card, setCard] = useState(0)
  console.log('cards', decks.cards)
useEffect( () => {
  readDeck(deckId).then(setDecks);
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
  if(card < decks.cards.length - 1){
    setCard(card + 1)
  }
  if(card === decks.cards.length -1){
    setCard(0)
  }
}
/*Everything before this point is setup for what is actually returned */
if(show === true){
return(  
<>
<Header />
<div className="container">
  <Link className='btn' to='/'>Home</Link>
</div>
<div>
  {decks.cards[card].front}
</div>
<div className="container">
<button className="btn" onClick={Flip}>Flip</button>
<button className="btn" onClick={Next}>Next</button>
</div>

</>)}
if(show === false){
  return(  
    <>
    <Header />
    <div className="container" key=''>
      <Link className='btn' to='/'>Home</Link>
    </div>
    <div key=''>
      {decks.cards[card].back}
    </div>
    <div className="container" key=''>
      <button className="btn" onClick={Flip}>Flip</button>
      <button className="btn" onClick={Flip}>Next</button>
    </div>
    </>)
  
}
  
}