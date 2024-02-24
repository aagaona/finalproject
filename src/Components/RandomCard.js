import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Store/AppContext';
import axios from 'axios';
import { Button, Card, CardBody, ListGroup, ListGroupItem, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom, faBolt, faDroplet, faFire, faGear, faSkull, faSun, faTree } from '@fortawesome/free-solid-svg-icons';

function RandomCard() {

    const {store,dispatch} = useContext(AppContext);
    const [randomCard, setRandomCard] = useState(null);
    const randomURL = `https://api.scryfall.com/cards/random`

    useEffect(() => {
        const getRandom = async () => {
            try {
              let resp = await axios.get(`${randomURL}?q=layout%3Anormal`);
              setRandomCard(resp.data);
              
              dispatch({type: 'updateRandomCard', payload: resp.data})
      
            } catch (error) {console.error("Error fetching data:", error);
            };
          };
      
          getRandom();
    }, []);

    async function randomWhite() {
        try {
            let resp = await axios.get(`${randomURL}?q=c%3Aw+layout%3Anormal`);
            console.log(resp.data);
            setRandomCard(resp.data);

        } catch(error){console.error("Error fetching data:", error)

        };
    };

    async function randomBlue() {
        try {
            let resp = await axios.get(`${randomURL}?q=c%3Au+layout%3Anormal`);
            console.log(resp.data);
            setRandomCard(resp.data);

        } catch(error){console.error("Error fetching data:", error)

        };
    };

    async function randomBlack() {
        try {
            let resp = await axios.get(`${randomURL}?q=c%3Ab+layout%3Anormal`);
            console.log(resp.data);
            setRandomCard(resp.data);

        } catch(error){console.error("Error fetching data:", error)

        };
    };

    async function randomRed() {
        try {
            let resp = await axios.get(`${randomURL}?q=c%3Ar+layout%3Anormal`);
            console.log(resp.data);
            setRandomCard(resp.data);

        } catch(error){console.error("Error fetching data:", error)

        };
    };

    async function randomGreen() {
        try {
            let resp = await axios.get(`${randomURL}?q=c%3Ag+layout%3Anormal`);
            console.log(resp.data);
            setRandomCard(resp.data);

        } catch(error){console.error("Error fetching data:", error)

        };
    };

    async function randomColorless() {
        try {
            let resp = await axios.get(`${randomURL}?q=c%3Ac+layout%3Anormal`);
            console.log(resp.data);
            setRandomCard(resp.data);

        } catch(error){console.error("Error fetching data:", error)

        };
    };

    async function randomAnything() {
        try {
            let resp = await axios.get(`${randomURL}?q=is%3Afunny+layout%3Anormal`);
            console.log(resp.data);
            setRandomCard(resp.data);

        } catch(error){console.error("Error fetching data:", error)

        };
    };




    return (
        <div className='randomdiv'>
            <h3>Explore the Multiverse</h3>
            <p>
                Welcome to the Multiverse of Magic: the Gathering!
                <br />
                Select one of the buttons below to dive deeper into the Color of your choice! 
                <br />
                <br/>
                The cards are sorted by Color <strong>NOT</strong> Color Identity, so if you're lucky you may come across a multicolor cards!
                <br />
                <small>For those seeking a more reckless experience, feel free to give into the chaos...</small>
            </p>
            <Button className='randombtn' variant='light' onClick={randomWhite}>
                <FontAwesomeIcon icon={faSun} /> Explore Plains
            </Button>
            <Button className='randombtn' variant='primary' onClick={randomBlue}>
                <FontAwesomeIcon icon={faDroplet} /> Explore Islands
            </Button>
            <Button className='randombtn' variant='dark' onClick={randomBlack}>
                <FontAwesomeIcon icon={faSkull} /> Explore Swamps
            </Button>
            <Button className='randombtn' variant='danger' onClick={randomRed}>
                <FontAwesomeIcon icon={faFire} /> Explore Mountains
            </Button>
            <Button className='randombtn' variant='success' onClick={randomGreen}>
                <FontAwesomeIcon icon={faTree} /> Explore Forests
            </Button>
            <Button className='randombtn' variant='secondary' onClick={randomColorless}>
                <FontAwesomeIcon icon={faGear} /> Explore Colorless
            </Button>
            <br />

            {randomCard ? (
            <div className='randomcard-div'>
                {randomCard.image_uris && randomCard.image_uris.normal && (
                    <Card className='randomcard' key={randomCard.id} style={{backgroundColor: '#282c34'}}>
                        <Card.Img variant='top' src={randomCard.image_uris.normal} />
                        <CardBody>
                            <Card.Title>{randomCard.name}</Card.Title>
                            <ListGroup>
                                <ListGroupItem style={{backgroundColor: '#747474', color: 'white', textAlign: 'left'}}>
                                    <strong>Legal for Play in: </strong>
                                </ListGroupItem>
                                <ListGroupItem style={{backgroundColor: '#141414', color: 'white', textAlign: 'left'}}>
                                    <strong>Commander:</strong> {randomCard.legalities.commander}
                                </ListGroupItem>
                                <ListGroupItem style={{backgroundColor: '#141414', color: 'white', textAlign: 'left'}}>
                                    <strong>Brawl:</strong> {randomCard.legalities.brawl}
                                </ListGroupItem>
                                <ListGroupItem style={{backgroundColor: '#141414', color: 'white', textAlign: 'left'}}>
                                    <strong>Modern:</strong> {randomCard.legalities.modern}
                                </ListGroupItem>
                                <ListGroupItem style={{backgroundColor: '#141414', color: 'white', textAlign: 'left'}}>
                                    <strong>Oathbreaker:</strong> {randomCard.legalities.oathbreaker}
                                </ListGroupItem>
                                <ListGroupItem style={{backgroundColor: '#141414', color: 'white', textAlign: 'left'}}>
                                    <strong>Standard:</strong> {randomCard.legalities.standard}
                                </ListGroupItem>
                            </ListGroup>
                        </CardBody>
                        <Button className='randombtn' variant='outline-warning' onClick={randomAnything}>
                            <FontAwesomeIcon icon={faBolt} /> Give in to Chaos
                        </Button>
                    </Card>
                )}
            </div> ) : (
                <div>
                    <Spinner animation='border' role='status'>
                    </Spinner>
                    <br/>
                    <span> Checking State...</span>
                </div>
            )}
        </div>
    );
};

export default RandomCard