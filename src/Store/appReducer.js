
const appReducer = (state,action) => {
    const newState = {...state}
    const {type, payload} =action

    switch(type) {
        case 'retrieveDecks':
            console.log('Shuffling up', payload)
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
        case 'storeWhite':
            newState.randomPlains = payload
            console.log(`White has been sleeved`)
            break;
        case 'storeBlue':
            newState.randomIsland = payload
            console.log(`Blue has been sleeved`)
            break;
        case 'storeBlack':
            newState.randomSwamp = payload
            console.log(`Black has been sleeved`)
            break;
        case 'storeRed':
            newState.randomMountain = payload
            console.log(`Red has been sleeved`)
            break;
        case 'storeGreen':
            newState.randomForest = payload
            console.log(`Green has been sleeved`)
            break;
        case 'storeMulti':
            newState.randomMulti = payload
            console.log(`Multi has been sleeved`)
            break;
        case 'storeColorless':
            newState.randomArtifact = payload
            console.log(`Colorless has been sleeved`)
            break;
        case 'storeRandomCollection':
            newState.randomCollection = payload;
            console.log(`Examples Stored`,newState.randomCollection);
            break;
    }

    return newState;
};

export default appReducer; 