import React, { useContext } from 'react'
import { AppContext } from '../../Store/AppContext'
import DeckCard from '../DeckCard';
import AddCommanderDeck from '../AddCommanderDeck';

function Decktracker() {
  
    const {store} = useContext(AppContext);


    const displayDecks = store.decks.map(deck => <DeckCard key={deck.id} deck={deck}/>)

    return (
    <div>
        <h1>Deck Tracker</h1>

        <AddCommanderDeck />
        <div className='deckcards'>
            {displayDecks}
        </div>
    </div>
  )
}

export default Decktracker