import React, { useContext, useState } from 'react'
import { AppContext } from '../Store/AppContext';
import DeckCard from './DeckCard';
import { Button, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle } from 'react-bootstrap';
import { faBook, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import SearchResultsforDeck from './SearchResultsforDeck';
import RenderDeckCards from './RenderDeckCards';

function SelectedDeck({deck}) {
  const [commanderName, setCommanderName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [hoveredCardImage, setHoveredCardImage] = useState(null);

  
  const {store, dispatch} = useContext(AppContext);

  function handleInputChange(event) {
    setCommanderName(event.target.value);
  };

  const handleCardSelect = (selectedCard) => {
    console.log('Selected Card:', selectedCard);
    setSearchResults([]);
  };

  async function handleSearch () {
    try {
      const response = await axios.get(`https://api.scryfall.com/cards/search?q=${commanderName}+layout%3Anormal+game%3Apaper`);
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
    <SearchResultsforDeck key={card.id} card={card} deck={deck} onCardSelect={handleCardSelect} />
  ));

  const renderDeck = deck.library.length > 0 && (
    <RenderDeckCards library={deck.library}/>
  );
  

  const handleClearSearch = () => {
    setSearchResults([]);
  };
  
  return (
    <div className='add-field'>
      <div className='img-container'>
        <Card bg='dark' text='light' border='light' style={{textAlign: 'left'}}>
          <Card.Img variant='top' src={hoveredCardImage || deck.image}
            onMouseEnter={() => setHoveredCardImage(deck.cardimage || null)}
            onMouseLeave={() => setHoveredCardImage(null)}
          />
          <CardBody>
            <CardTitle>{deck.typeline}</CardTitle>
            <CardText>
              {deck.cardtext}
            </CardText>
          </CardBody>
          <CardFooter>
            <small>Win Count: {deck.wincount}</small>
          </CardFooter>
        </Card>
      </div>
      <div className='form-floating d-grid inputzone'>
        <input
          className='form-control'
          type="text"
          placeholder="Search for Cards"
          value={commanderName}
          onChange={handleInputChange}
        />
        <label>
          Search for Cards
        </label>
        <Button className="btn btn-primary btn-lg" type="button" onClick={handleSearch}>
          <FontAwesomeIcon icon={faBook}/> Search Archives
        </Button>
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
        <h6 className='mt-2'>Support for Double Faced Cards Coming Soon</h6>
        <h6 className='mt-2'>Powered by Scryfall API</h6>
      </div>
      <div className='searchresults'>
        {renderSearch}
      </div>
      <div>
        {renderDeck}
      </div>
    </div>
  );
}

export default SelectedDeck