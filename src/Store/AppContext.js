import { createContext } from "react";

export const AppContext = createContext(null);


export const intialState = {
    decks: [],
    selecteddeck: {},
    selectedcard: {},
    collection: [],
    randomcard: {},
    address: {
        street: '125 Vallecitos De Oro, Unit J',
        city: 'San Marcos',
        zip: '92069',
        state: 'Ca',
    },
    // w: 'public/images/White.jpg',
    // u: 'public\images\Blue.png',
    // b: 'public\images\Black.jpg',
    // r: 'public\images\Red.jpg',
    // g: 'public\images\Green.jpg',
};
