
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
            newState.selecteddeck = payload;
            console.log(newState.selecteddeck)
            break;
    }

    return newState;
};

export default appReducer; 