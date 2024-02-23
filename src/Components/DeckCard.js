import React, { useContext } from 'react'
import { Button, Card, CardBody, ListGroup } from 'react-bootstrap';
import { AppContext } from '../Store/AppContext';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown, faSkull, faTrash } from '@fortawesome/free-solid-svg-icons';



function DeckCard({deck}) {
  
    const {dispatch} = useContext(AppContext)

    async function handleDelete({deck}) {
        try {
            await axios.delete(`https://65d116a8ab7beba3d5e4149f.mockapi.io/commanderdecks/${deck.id}`);

            const getData = async () => {
                try {
                  let resp = await axios.get('https://65d116a8ab7beba3d5e4149f.mockapi.io/commanderdecks');
                  console.log(resp.data);
                  
                  dispatch({type: 'retrieveDecks',payload: resp.data})
          
                } catch (error) {console.error("Error fetching data:", error);
                };
              };
          
            getData();
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    };
    
    const makeSelected = () => {
        dispatch({type:'makeSelectedDeck', payload:{deck}})
    };

    async function handleVic({deck}) {
        const winCount = deck.wincount;
        const totalCount = deck.totalgames;
    
        const updatedCount = {
            wincount: winCount+1,
            totalgames: totalCount+1,
            lastresult: true
        };

        try {
            await axios.put(`https://65d116a8ab7beba3d5e4149f.mockapi.io/commanderdecks/${deck.id}`, updatedCount);

            const getData = async () => {
                try {
                  let resp = await axios.get('https://65d116a8ab7beba3d5e4149f.mockapi.io/commanderdecks');
                  console.log(resp.data);
                  
                  dispatch({type: 'retrieveDecks',payload: resp.data})
          
                } catch (error) {console.error("Error fetching data:", error);
                };
              };
          
            getData();

        } catch(error){console.error("Error fetching data:", error);
        };
    };

    async function handleDefeat({deck}) {
        const totalCount = deck.totalgames;
    
        const updatedCount = {
            totalgames: totalCount+1,
            lastresult: false
        };

        try {
            await axios.put(`https://65d116a8ab7beba3d5e4149f.mockapi.io/commanderdecks/${deck.id}`, updatedCount);

            const getData = async () => {
                try {
                  let resp = await axios.get('https://65d116a8ab7beba3d5e4149f.mockapi.io/commanderdecks');
                  console.log(resp.data);
                  
                  dispatch({type: 'retrieveDecks',payload: resp.data})
          
                } catch (error) {console.error("Error fetching data:", error);
                };
              };
          
            getData();

        } catch(error){console.error("Error fetching data:", error);
        };
    };
    
    return (
    <div className='individualcards'>
        <Card bg='dark' text='white' border='secondary' style={{width: '20rem', height: '32rem'}}>
            <Card.Img variant='top' src={deck.image} className='img-box' onClick={makeSelected}/>
            <CardBody>
                <Card.Title>{deck.commander}</Card.Title>
                <Card.Subtitle>{deck.typeline}</Card.Subtitle>
                <Button className='victorybtn' variant='primary' onClick={() => handleVic({deck})}>
                    <FontAwesomeIcon icon={faCrown} /> Victory
                </Button>
                <Button className='defeatbtn' variant='danger' onClick={() => handleDefeat({deck})}>
                    <FontAwesomeIcon icon={faSkull} /> Defeat
                </Button>
                <br/>
                <Button variant='outline-danger' onClick={() => handleDelete({deck})}>
                    <FontAwesomeIcon icon={faTrash} /> Delete
                </Button>
            </CardBody>
            <ListGroup variant="flush">
                <ListGroup.Item style={{backgroundColor: '#282c34', textAlign: 'left', color: 'white'}}>Total Games Played: {deck.totalgames}</ListGroup.Item>
                <ListGroup.Item style={{backgroundColor: '#282c34', textAlign: 'left', color: 'white'}}>Games Won: {deck.wincount}</ListGroup.Item>
            </ListGroup>
        </Card>
    </div>
  )
}

export default DeckCard