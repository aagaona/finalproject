import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Store/AppContext';
import axios from 'axios';
import { Button, Card, CardBody } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom, faDroplet, faFire, faGear, faSkull, faSun, faTree } from '@fortawesome/free-solid-svg-icons';

function RandomCard() {

    const {store,dispatch} = useContext(AppContext);
    const [randomCard, setRandomCard] = useState({});
    const randomURL = `https://api.scryfall.com/cards/random`

    useEffect(() => {
        const getRandom = async () => {
            try {
              let resp = await axios.get(randomURL);
              console.log(resp.data);
              setRandomCard(resp.data);
              
              dispatch({type: 'updateRandomCard', payload: resp.data})
      
            } catch (error) {console.error("Error fetching data:", error);
            };
          };
      
          getRandom();
    }, []);

    async function randomWhite() {
        try {
            let resp = await axios.get(`${randomURL}?q=c%3Aw`);
            console.log(resp.data);
            setRandomCard(resp.data);

            // dispatch({type: 'updateRandomCard', payload: resp.data})

        } catch(error){console.error("Error fetching data:", error)

        };
    };

    async function randomBlue() {
        try {
            let resp = await axios.get(`${randomURL}?q=c%3Au`);
            console.log(resp.data);
            setRandomCard(resp.data);

            // dispatch({type: 'updateRandomCard', payload: resp.data})

        } catch(error){console.error("Error fetching data:", error)

        };
    };

    async function randomBlack() {
        try {
            let resp = await axios.get(`${randomURL}?q=c%3Ab`);
            console.log(resp.data);
            setRandomCard(resp.data);

            // dispatch({type: 'updateRandomCard', payload: resp.data})

        } catch(error){console.error("Error fetching data:", error)

        };
    };

    async function randomRed() {
        try {
            let resp = await axios.get(`${randomURL}?q=c%3Ar`);
            console.log(resp.data);
            setRandomCard(resp.data);

            // dispatch({type: 'updateRandomCard', payload: resp.data})

        } catch(error){console.error("Error fetching data:", error)

        };
    };

    async function randomGreen() {
        try {
            let resp = await axios.get(`${randomURL}?q=c%3Ag`);
            console.log(resp.data);
            setRandomCard(resp.data);

            // dispatch({type: 'updateRandomCard', payload: resp.data})

        } catch(error){console.error("Error fetching data:", error)

        };
    };

    async function randomColorless() {
        try {
            let resp = await axios.get(`${randomURL}?q=c%3Ac`);
            console.log(resp.data);
            setRandomCard(resp.data);

            // dispatch({type: 'updateRandomCard', payload: resp.data})

        } catch(error){console.error("Error fetching data:", error)

        };
    };

    async function randomAnything() {
        try {
            let resp = await axios.get(randomURL);
            console.log(resp.data);
            setRandomCard(resp.data);

            // dispatch({type: 'updateRandomCard', payload: resp.data})

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
                The cards are sorted by Color Identity, so if you're lucky you may come across a multi-color cards!
                <br />
                For those seeking a more reckless experience, feel free to give into the chaos...
            </p>
            <Button className='randombtn' variant='light' onClick={randomWhite}>
                <FontAwesomeIcon icon={faSun} /> Explore White
            </Button>
            <Button className='randombtn' variant='primary' onClick={randomBlue}>
                <FontAwesomeIcon icon={faDroplet} /> Explore Blue
            </Button>
            <Button className='randombtn' variant='dark' onClick={randomBlack}>
                <FontAwesomeIcon icon={faSkull} /> Explore Black
            </Button>
            <Button className='randombtn' variant='danger' onClick={randomRed}>
                <FontAwesomeIcon icon={faFire} /> Explore Red
            </Button>
            <Button className='randombtn' variant='success' onClick={randomGreen}>
                <FontAwesomeIcon icon={faTree} /> Explore Green
            </Button>
            <Button className='randombtn' variant='secondary' onClick={randomColorless}>
                <FontAwesomeIcon icon={faGear} /> Explore Colorless
            </Button>
            <div className='randomcard-div'>
                {randomCard.image_uris && randomCard.image_uris.normal && (
                    <Card className='randomcard' key={randomCard.id} style={{ width: '20rem', height: '34rem', backgroundColor: '#282c34'}}>
                        <Card.Img variant='top' src={randomCard.image_uris.normal} />
                        <CardBody>
                            <Card.Title>{randomCard.name}</Card.Title>
                        </CardBody>
                        <Button className='randombtn' variant='outline-warning' onClick={randomAnything}>
                            <FontAwesomeIcon icon={faAtom} /> Give in to Chaos
                        </Button>
                    </Card>
                )}
            </div>
        </div>
    );
};

export default RandomCard