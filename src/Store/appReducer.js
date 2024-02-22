import axios from "axios";

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
        case 'deleteDeck':
            console.log(`Deleting ${payload.deck.commander} ID: ${payload.deck.id}`);
            const deleteDeck = async () => {
                try {
                  await axios.delete(`https://65d116a8ab7beba3d5e4149f.mockapi.io/commanderdecks/${payload.deck.id}`)
                  
                  let resp = await axios.get('https://65bc4e1752189914b5bdbc75.mockapi.io/commanderdecks');
                  console.log(resp.data);
                  setDecks(resp.data);
                } catch (error) {
                  console.error("Error fetching data:", error);
                }
              };
        
              deleteDeck();
            break;
        
    }

    return newState;
};

export default appReducer; 