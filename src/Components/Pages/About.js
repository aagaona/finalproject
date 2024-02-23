import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Card, CardBody } from 'react-bootstrap';
import AboutAccordion from '../AboutAccordion';
import { AppContext } from '../../Store/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';

function About() {

  const {store} = useContext(AppContext);

  const [randomWhite,setRandomWhite] = useState({});
  const [randomBlue,setRandomBlue] = useState({});
  const [randomBlack,setRandomBlack] = useState({});
  const [randomRed,setRandomRed] = useState({});
  const [randomGreen,setRandomGreen] = useState({});
  const [randomMulti,setRandomMulti] = useState({});
  const [randomColorless,setRandomColorless] = useState({});

  const randomURL = `https://api.scryfall.com/cards/random`
  const whiteURL = `https://api.scryfall.com/cards/named?fuzzy=Elesh+Norn%2C+Mother+of+Machines`
  const blueURL = `https://api.scryfall.com/cards/named?fuzzy=Orvar%2C+the+All-Form`
  const blackURL = `https://api.scryfall.com/cards/named?fuzzy=Tinybones`
  const redURL = `https://api.scryfall.com/cards/named?fuzzy=Magda%2C+Brazen+Outlaw`
  const greenURL = `https://api.scryfall.com/cards/named?fuzzy=Ayula%2C+Queen+Among+Bears`
  const multiURL = `https://api.scryfall.com/cards/named?fuzzy=Jodah%2C+the+Unifier`
  const colorlessURL = `https://api.scryfall.com/cards/named?fuzzy=Traxos%2C+Scourge+of+Kroog`

  // useEffect(() => {
  //   const getRandomCards = async () => {
  //     try {
  //       const [respWhite, respBlue, respBlack, respRed, respGreen, respMulti, respColorless] = await Promise.all([
  //         axios.get(whiteURL),
  //         axios.get(blueURL),
  //         axios.get(blackURL),
  //         axios.get(redURL),
  //         axios.get(greenURL),
  //         axios.get(multiURL),
  //         axios.get(colorlessURL),
  //       ]);

  //       setRandomWhite(respWhite.data);
  //       setRandomBlue(respBlue.data);
  //       setRandomBlack(respBlack.data);
  //       setRandomRed(respRed.data);
  //       setRandomGreen(respGreen.data);
  //       setRandomMulti(respMulti.data);
  //       setRandomColorless(respColorless.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   getRandomCards();
  // }, []);


  // const getImageSrc = (card) => {
  //   return card?.image_uris?.normal || card?.card_faces[0]?.image_uris?.normal;
  // };


  return (
    <>
      <h1 className='title'><FontAwesomeIcon icon={faCrown}/> EDH 101: What you need to know to Start playing Commander</h1>
      <p>
        So you want to play EDH, more commonly know as Commander but dont know how to get started?
        <br />
        Dont fret we've got you covered!
        <br />
        Below we've magically gathered some of the most burning questions players have when first jumping into the format!
        <br />
        Didn't see the answer you're looking for below? Jump on over to our Socials page and reach out to us directly or join us in store! 
      </p>
      <AboutAccordion />
    </>
  )
}

export default About