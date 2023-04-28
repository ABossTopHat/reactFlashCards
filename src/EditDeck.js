import React, {useState, useEffect} from "react";
import {useHistory, Link, useParams} from 'react-router-dom'
import Header from './Home/Header'
import { listDecks, createDeck  } from "./utils/api";
import { readDeck, updateDeck } from "./utils/api"



export default function EditDeck(){
    const history = useHistory()
    const {deckId} = useParams()
    const [deck, setDeck] = useState({name:"Loading", cards:[{front:"", back:''}]})
    
    useEffect( () => {
      readDeck(deckId).then(setDeck);
    }, [deckId])

    const [newData,setNewData] = useState({})
    const [formData, setFormData]= useState(deck)
    const [value, setValue] = useState(false)

    const handleChange = ({ target }) => {
        setDeck({
         ...deck,
         [target.name]: target.value,
       });
     };
    const handleSubmit = (event) => {
        event.preventDefault();
        setNewData(deck)
        setValue(true)
      };
      
      useEffect(()=>{
        if(value === true){
        updateDeck(newData).then((savedDeck)=>history.push(`/decks/${deck.id}/view`));
        }
      }, [newData])
return (
    <div>
        <Header />
        <Link className='btn' to='/'>Home</Link>
        <div className="container">
            <form>
                <div>
                    <label htmlFor="name">
                        <div>
                        Edit Deck Name:
                        </div>
                    <input type="text" id="name" name="name" value={deck.name} onChange={handleChange}/>
                </label>
                </div>
                <div>
                    <label htmlFor="description">
                        <div>
                        Edit Description:
                        </div>
                    <textarea type='text' id='description' name='description' value={deck.description}
                    onChange={handleChange} />
                    </label>
                
                </div>
               
            </form>
        </div>
        <div>
            <button className="btn" onClick={handleSubmit}>Submit</button>
        </div>
        
    </div>
)
}