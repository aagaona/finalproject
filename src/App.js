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

  const [store, dispatch] = useReducer(appReducer,intialState)

  const url = 'https://65d116a8ab7beba3d5e4149f.mockapi.io/commanderdecks'

  useEffect(() => {
    const getData = async () => {
      try {
        let resp = await axios.get(url);
        console.log(resp.data);
        
        dispatch({type: 'retrieveDecks',payload: resp.data})

      } catch (error) {console.error("Error fetching data:", error);
      };
    };

    getData();

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
