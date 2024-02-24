
const appReducer = (state,action) => {
    const newState = {...state}
    const {type, payload} =action

    switch(type) {
        case 'retrieveDecks':
            console.log('Shuffling up', payload)
            console.log(newState);
            newState.decks = payload
            break;
        case 'makeSelectedDeck':
            newState.selectedDeck = payload;
            console.log(newState.selectedDeck);
            break;
        case 'updateSelectedDeck':
            newState.selectedDeck.deck.library = payload;
            console.log(newState.selectedDeck);
            break;
    }

    return newState;
};

export default appReducer; 