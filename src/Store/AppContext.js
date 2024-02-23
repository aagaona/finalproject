import { createContext } from "react";

export const AppContext = createContext(null);


export const intialState = {
    decks: [],
    selecteddeck: {},
    selectedcard: {},
    collection: [],
    randomcard: {},
};
