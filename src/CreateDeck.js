import React, {useState, useEffect} from "react";
import {useHistory, Link} from 'react-router-dom'

import { listDecks, createDeck  } from "./utils/api";

export default function Create(){
    const history = useHistory()
    const initialFormState ={
        name:'',
        cards:[],
        description:''
    }
    const [newData,setNewData] = useState(initialFormState)

    const [formData, setFormData]= useState([])
    useEffect(()=>{
        listDecks().then(data => setFormData(data))
    },[])


    const handleChange = ({ target }) => {
        setNewData({
         ...newData,
         [target.name]: target.value,
       });
     };
    const handleSubmit = (event) => {
        event.preventDefault();
       
        createDeck(newData).then((savedDeck)=>history.push(`/decks/${savedDeck.id}/view`));
      };

return (
    <div>
     
        <Link className='btn' to='/'>Home</Link>
        <div className="container">
            <form>
                <div>
                    <label htmlFor="name">
                        <div>
                        Deck Name:
                        </div>
                    <input type="text" id="name" name="name" onChange={handleChange} value={newData.name}/>
                </label>
                </div>
                <div>
                    <label htmlFor="description">
                        <div>
                        Description:
                        </div>
                    <textArea type='text' id='description' name='description' 
                    onChange={handleChange}/>
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