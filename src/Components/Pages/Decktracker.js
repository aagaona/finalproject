import React, { useContext } from 'react'
import { AppContext } from '../../Store/AppContext'
import DeckCard from '../DeckCard';
import AddCommanderDeck from '../AddCommanderDeck';

function Decktracker() {
  
    const {store} = useContext(AppContext);


    const displayDecks = store.decks.map(deck => <DeckCard key={deck.id} deck={deck}/>)

    return (
    <div>
        <h1>Legends Corner</h1>
        <AddCommanderDeck />
        <hr />
        <h3>Existing Decks</h3>
        <div className='deckcards'>
            {displayDecks}
        </div>
    </div>
  )
}

export default Decktracker