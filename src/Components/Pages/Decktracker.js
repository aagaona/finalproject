import React, { useContext } from 'react'
import { AppContext } from '../../Store/AppContext'
import DeckCard from '../DeckCard';
import AddCommanderDeck from '../AddCommanderDeck';
import SelectedDeck from '../SelectedDeck';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';

function Decktracker() {
  
    const {store, dispatch} = useContext(AppContext);


    const displayDecks = store.decks.map(deck => <DeckCard key={deck.id} deck={deck}/>);

    const resetSelectedDeck = () => {
        dispatch({ type: 'makeSelectedDeck', payload: {} });
    };

    return (
    <div>
        {Object.keys(store.selectedDeck).length !== 0 ? (
        <div>
          <h3>{store.selectedDeck.deck.commander}</h3>
          <Button className='reset-deck' variant='outline-light' onClick={resetSelectedDeck}><FontAwesomeIcon icon={faAnglesLeft}/> Return to Decks</Button>
          <SelectedDeck key={store.selectedDeck.deck.id} deck={store.selectedDeck.deck} />
        </div>
        ) : (
        <div>
            <h1>Legends Corner</h1>
            <AddCommanderDeck />
            <hr />
            <h3>Existing Decks</h3>
            <div className='deckcards'>
                {displayDecks}
            </div>
        </div>
        )}
    </div>
  )
}

export default Decktracker