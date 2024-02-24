import { createContext } from "react";

export const AppContext = createContext(null);


export const intialState = {
    decks: [],
    selectedDeck: {},
    selectedDard: {},
    collection: [],
    randomCard: {},
    address: {
        street: '125 Vallecitos De Oro, Unit J',
        city: 'San Marcos',
        zip: '92069',
        state: 'Ca',
    },
    randomPlains: {}, 
    randomIsland: {},
    randomSwamp: {},
    randomMountain: {},
    randomForest: {},
    randomMuti: {},
    randomArtifact: {},
    randomCollection: [],
};
