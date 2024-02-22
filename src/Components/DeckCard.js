import React, { useContext } from 'react'
import { Button, Card, CardBody, ListGroup } from 'react-bootstrap';
import { AppContext } from '../Store/AppContext';

function DeckCard({deck}) {
  
    const {dispatch} = useContext(AppContext)

    const handleDelete = () => {
        dispatch({type:'deleteDeck', payload:{deck}})
    }
    
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
                <Button variant='dark' onClick={handleDelete}>Delete</Button>
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