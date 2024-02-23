import axios from 'axios';
import React, { useContext, useState } from 'react'
import { AppContext } from '../Store/AppContext';
import SearchResults from './SearchResults';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

function AddCommanderDeck() {
  const [commanderName, setCommanderName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [searchResults, setSearchResults] = useState([])

  const {dispatch} = useContext(AppContext)

  // MOVED TO SEARCHRESULTS AND HANDLED THERE
  // async function handleAdd() {
  //   try {
  //     const response = await axios.get(`https://api.scryfall.com/cards/named?fuzzy=${commanderName}`);
  //     console.log(response.data);
  //     const cardData = response.data;

  //     await axios.post('https://65d116a8ab7beba3d5e4149f.mockapi.io/commanderdecks', {
  //       commander: cardData.name,
  //       typeline: cardData.type_line,
  //       image: cardData.image_uris.art_crop,
  //       totalgames: 0,
  //       wincount: 0,
  //       lastresult: null,
  //       cardimage: cardData.image_uris.normal,
  //       coloridentity: cardData.color_identity,
  //     });

  //     setCommanderName('');
      
  //     const getData = async () => {
  //         try {
  //           let resp = await axios.get('https://65d116a8ab7beba3d5e4149f.mockapi.io/commanderdecks');
  //           console.log(resp.data);
            
  //           dispatch({type: 'retrieveDecks',payload: resp.data})
    
  //         } catch (error) {console.error("Error fetching data:", error);
  //         };
  //       };
    
  //     getData();

  //     setErrorMessage('');
  //   } catch (error) {
  //     console.error('Error retrieving card:', error);
  //     setErrorMessage('Error: You Failed to Find the Card. Refine and Try Again.');
  //   }
  // };

  function handleInputChange(event) {
    setCommanderName(event.target.value);
  };

  const handleCardSelect = (selectedCard) => {
    console.log('Selected Card:', selectedCard);
    setSearchResults([]);
  };

  async function handleSearch () {
    try {
      const response = await axios.get(`https://api.scryfall.com/cards/search?q=${commanderName}+t%3Alegend`);
      console.log(response.data);
      const cardData = response.data;
      const cardList = cardData.data; 
      
      setSearchResults(cardList);
      setCommanderName('');
      setErrorMessage('');

    } catch (error) {
      console.error('Error retrieving card:', error);
      setErrorMessage('Error: You Failed to Find the Card. Refine and Try Again.');
    }
  };

  const renderSearch = searchResults.map((card) => (
    <SearchResults key={card.id} card={card} onCardSelect={handleCardSelect} />
  ));

  const handleClearSearch = () => {
    setSearchResults([]);
  };

  return (
    <div className='add-field'>
      <div className='form-floating d-grid inputzone'>
        <input
          className='form-control'
          type="text"
          placeholder="Summon Your Next Great Commander"
          value={commanderName}
          onChange={handleInputChange}
        />
        <label>
          Summon Your Next Great Commander
        </label>
        <button className="btn btn-primary btn-lg" type="button" onClick={handleSearch}>
          <FontAwesomeIcon icon={faBook}/> Search Archives
        </button>
        {searchResults.length > 0 && (
          <Button variant='outline-danger' onClick={handleClearSearch}>
            <FontAwesomeIcon icon={faTrash} /> Reset Archives
          </Button>
        )}
        {errorMessage && (
          <div className="alert alert-danger mt-2">
            {errorMessage}
          </div>
        )}
        <h6 className='mt-2'>Powered by Scryfall API</h6>
      </div>
      <div className='searchresults'>
        {renderSearch}
      </div>
    </div>
  );
}

export default AddCommanderDeck


// https://api.scryfall.com/cards/search?q=