import React, {useState, useEffect} from "react";
import {useHistory, Link, useParams} from 'react-router-dom'

import { readCard, createCard } from "./utils/api";


export default function CardForm({newCard}){
    const history = useHistory()
    const {cardId, deckId} = useParams()
    const [card, setCard] = useState({front:"", back:""})
    const handleChange = ({ target }) => {
        setCard({
         ...card,
         [target.name]: target.value,
       });
     };
    const handleSubmit = (event) => {
        event.preventDefault();
        setNewData(card)
        setValue(true)
      };
      const [newData,setNewData] = useState({})
      useEffect( () => {
        readCard(cardId).then(setCard);
      }, [cardId])
     
      const [value, setValue] = useState(false)
     
        
        useEffect(()=>{
          if(value === true){
          createCard(deckId, newData).then((savedDeck)=>history.push(`/decks/${deckId}/view`));
          }
        }, [newData])

        const Card1 = (
                <div>
                    <div className="container">
                        <form>
                            <div>
                                <label htmlFor="name">
                                    <div>
                                    Card Front:
                                    </div>
                                <input type="text" id="front" name="front" value={card.front} onChange={handleChange}/>
                            </label>
                            </div>
                            <div>
                                <label htmlFor="description">
                                    <div>
                                    Card Back:
                                    </div>
                                <input type='text' id='back' name='back' value={card.back}
                                onChange={handleChange} />
                                </label>
                            
                            </div>
                           
                        </form>
                    </div>
                    <div>
                        <button className="btn" onClick={handleSubmit}>Edit Card</button>
                    </div>
                    
                </div>)
        const Card2= (
        
            <div>
                <div className="container">
                    <form>
                        <div>
                            <label htmlFor="name">
                                <div>
                                Card Front:
                                </div>
                            <textArea type="text" id="front" name="front" value={card.front} onChange={handleChange}/>
                        </label>
                        </div>
                        <div>
                            <label htmlFor="description">
                                <div>
                                Card Back:
                                </div>
                            <textArea type='text' id='back' name='back' value={card.back}
                            onChange={handleChange} />
                            </label>
                        
                        </div>
                       
                    </form>
                </div>
                <div>
                    <button className="btn" onClick={handleSubmit}>Add Card</button>
                </div>
                
            </div>
    )

    return newCard ?  Card2 : Card1
}
