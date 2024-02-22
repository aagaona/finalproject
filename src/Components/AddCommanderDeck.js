import axios from 'axios';
import React, { useContext, useState } from 'react'
import { AppContext } from '../Store/AppContext';

function AddCommanderDeck() {
    const [commanderName, setCommanderName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const {dispatch} = useContext(AppContext)
  
    async function handleAdd() {
      try {
        const response = await axios.get(`https://api.scryfall.com/cards/named?fuzzy=${commanderName}`);
        console.log(response.data);
        const cardData = response.data;
  
        await axios.post('https://65d116a8ab7beba3d5e4149f.mockapi.io/commanderdecks', {
          commander: cardData.name,
          typeline: cardData.type_line,
          image: cardData.image_uris.art_crop,
          totalgames: 0,
          wincount: 0,
          lastresult: null,
          cardimage: cardData.image_uris.normal,
        });
  
        setCommanderName('');
        
        const getData = async () => {
            try {
              let resp = await axios.get('https://65d116a8ab7beba3d5e4149f.mockapi.io/commanderdecks');
              console.log(resp.data);
              
              dispatch({type: 'retrieveDecks',payload: resp.data})
      
            } catch (error) {console.error("Error fetching data:", error);
            };
          };
      
        getData();

        setErrorMessage('');
      } catch (error) {
        console.error('Error retrieving card:', error);
        setErrorMessage('Error: You Failed to Find the Card. Refine and Try Again.');
      }
    }
  
    function handleInputChange(event) {
      setCommanderName(event.target.value);
    }
  
    return (
      <div className='add-field'>
        <div className='form-floating d-grid'>
          <input
            className='form-control'
            type="text"
            placeholder="Add New Commander"
            value={commanderName}
            onChange={handleInputChange}
          />
          <label>
            New Commander Deck
          </label>
          <button className="btn btn-primary btn-lg" type="button" onClick={handleAdd}>
            Add Deck
          </button>
          {errorMessage && (
            <div className="alert alert-danger mt-2">
              {errorMessage}
            </div>
          )}
          <h6 className='mt-2'>Powered by Scryfall API</h6>
        </div>
      </div>
    );
}

export default AddCommanderDeck