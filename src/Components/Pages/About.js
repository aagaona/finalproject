import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Card, CardBody } from 'react-bootstrap';
import AboutAccordion from '../AboutAccordion';
import { AppContext } from '../../Store/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import AboutCards from '../AboutCards';

function About() {

  const {store} = useContext(AppContext);


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
      <br/>
      <br/>
      <div className='color-ident'>
        <h1>Meet the Colors' identities</h1>
        <p>We've included a quick example of the variuous color identies below. Read through them to help you understand the colors and which might peak your intrest!</p>
        <br/>
        <AboutCards />
      </div>
    </>
  )
}

export default About