import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import Decktracker from './Components/Pages/Decktracker';
import About from './Components/Pages/About';
import Socials from './Components/Pages/Socials';
import { AppContext, intialState } from './Store/AppContext';
import { useEffect, useReducer, useState } from 'react';
import Footer from './Components/Footer';
import appReducer from './Store/appReducer';
import axios from 'axios';


function App() {
  const randomCollectionArray = [];

  const [store, dispatch] = useReducer(appReducer,intialState)

  const url = 'https://65d116a8ab7beba3d5e4149f.mockapi.io/commanderdecks'
  const randomURL = `https://api.scryfall.com/cards/random`
  const whiteURL = `https://api.scryfall.com/cards/random?q=c%3DW+is%3Acommander+layout%3Anormal+game%3Apaper`
  const blueURL = `https://api.scryfall.com/cards/random?q=c%3DU+is%3Acommander+layout%3Anormal+game%3Apaper`
  const blackURL = `https://api.scryfall.com/cards/random?q=c%3DB+is%3Acommander+layout%3Anormal+game%3Apaper`
  const redURL = `https://api.scryfall.com/cards/random?q=c%3DR+is%3Acommander+layout%3Anormal+game%3Apaper`
  const greenURL = `https://api.scryfall.com/cards/random?q=c%3DG+is%3Acommander+layout%3Anormal+game%3Apaper`
  const multiURL = `https://api.scryfall.com/cards/random?q=c%3DM+is%3Acommander+layout%3Anormal+game%3Apaper`
  const colorlessURL = `https://api.scryfall.com/cards/random?q=c%3DC+is%3Acommander+layout%3Anormal+game%3Apaper`

  useEffect(() => {
    const getData = async () => {
      try {
        let resp = await axios.get(url);
        
        dispatch({type: 'retrieveDecks',payload: resp.data})

      } catch (error) {console.error("Error fetching data:", error);
      };
    };

    const getRandomCards = async () => {
      try {
        const [respWhite, respBlue, respBlack, respRed, respGreen, respMulti, respColorless] = await Promise.all([
          axios.get(whiteURL),
          axios.get(blueURL),
          axios.get(blackURL),
          axios.get(redURL),
          axios.get(greenURL),
          axios.get(multiURL),
          axios.get(colorlessURL),
        ]);

        console.log(respWhite.data);
        dispatch({type: 'storeWhite',payload: respWhite.data})
        console.log(respBlue.data);
        dispatch({type: 'storeBlue',payload: respBlue.data})
        console.log(respBlack.data);
        dispatch({type: 'storeBlack',payload: respBlack.data})
        console.log(respRed.data);
        dispatch({type: 'storeRed',payload: respRed.data})
        console.log(respGreen.data);
        dispatch({type: 'storeGreen',payload: respGreen.data})
        console.log(respMulti.data);
        dispatch({type: 'storeMulti',payload: respMulti.data})
        console.log(respColorless.data);
        dispatch({type: 'storeColorless',payload: respColorless.data})

        randomCollectionArray.push(respWhite.data, respBlue.data, respBlack.data, respRed.data, respGreen.data, respMulti.data, respColorless.data);


        dispatch({type: 'storeRandomCollection', payload: randomCollectionArray})

      } catch (error) {
        console.error('Error fetching data:', error);
      };
    };


    


    getData();
    getRandomCards();


  }, []);

  return (
    <AppContext.Provider value={{store, dispatch}}>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <div className='main-page'>
          <Routes>
            <Route path='/' element={ <Home /> }></Route>
            <Route path='/decks' element={ <Decktracker /> }></Route>
            <Route path='/about' element={ <About /> }></Route>
            <Route path='/socials' element={ <Socials /> }></Route>
          </Routes>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </AppContext.Provider>
  );
}

export default App;
