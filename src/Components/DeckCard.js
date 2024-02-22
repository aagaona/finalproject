import React, { useContext } from 'react'
import { Button, Card, CardBody, ListGroup } from 'react-bootstrap';
import { AppContext } from '../Store/AppContext';
import axios from 'axios';

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
    }
    
    return (
    <div className='individualcards'>
        <Card style={{width: '20rem', height: '38rem'}}>
            <Card.Img variant='top' src={deck.image} className='img-box' onClick={makeSelected}/>
            <CardBody>
                <Card.Title>{deck.commander}</Card.Title>
                <Card.Subtitle>{deck.typeline}</Card.Subtitle>
                {/* <Card.Text>
                    lorem
                </Card.Text> */}
                <Button variant='primary'>Victory</Button>
                <Button variant='danger'>Defeat</Button>
                <br/>
                <Button variant='dark' onClick={() => handleDelete({deck})}>Delete</Button>
            </CardBody>
            <ListGroup variant="flush">
                <ListGroup.Item>Total Games Played: {deck.totalgames}</ListGroup.Item>
                <ListGroup.Item>Games Won: {deck.wincount}</ListGroup.Item>
                <ListGroup.Item>This where we display the previous result</ListGroup.Item>
            </ListGroup>
        </Card>
    </div>
  )
}

export default DeckCard