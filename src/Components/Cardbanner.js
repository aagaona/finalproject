import React, { useContext } from 'react'
import { AppContext } from '../Store/AppContext'
import CardPoster from './CardPoster'
import { Carousel } from 'react-bootstrap'

function Cardbanner() {
  
  const {store} = useContext(AppContext)

  const displayCards = store.decks.map((deck) => (
    <Carousel.Item style={{backgroundColor: '#0000'}}>
    <img
      style={{marginLeft:"auto",marginRight:"auto"}}
      className="d-block w-20 image-poster"
      src={deck.cardimage}
    />
    <Carousel.Caption>
      <div style={{backgroundColor: "#141414", width: '40%',marginLeft:"auto",marginRight:"auto"}}>
        <h3>{deck.commander}</h3>
        <p>Total Victories: {deck.wincount}</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  ));
  
  return (
    <Carousel>
      {displayCards}
    </Carousel>
  );
}

export default Cardbanner