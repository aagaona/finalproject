import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import React, { useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import { AppContext } from '../Store/AppContext';

function RenderDeckCards({library}) {

    const { store,dispatch } = useContext(AppContext);

    async function handleDelete({card}) {
        try {
            await axios.delete(`https://65d116a8ab7beba3d5e4149f.mockapi.io/commanderdecks/${store.selectedDeck.deck.id}/cards/${card.id}`);

            const getData = async () => {
                try {
                    let resp = await axios.get(`https://65d116a8ab7beba3d5e4149f.mockapi.io/commanderdecks/${store.selectedDeck.deck.id}/cards`);
                    console.log(resp.data);
    
                    dispatch({type: 'updateSelectedDeck',payload: resp.data})
    
                } catch(error){console.error("Error fetching data:", error);
                };
              }
    
              getData();
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    };

  return (
    <div className='card-container'>
      {library.map((card) => (
            <div key={card.id} className='card-item'>
                <img src={card.cardimage} alt={card.cardname} className='card-image'/>
                <Card bg='dark' text='light' className='card-content'>
                    <Card.Header>
                        <Card.Title>{card.cardname}</Card.Title>
                    </Card.Header>
                    <Card.Body className='card-text'>
                    <Card.Text>
                        <strong>CMC:</strong> {card.cmc}
                    </Card.Text>
                    <Card.Text>
                        <strong>{card.typeline}</strong>
                    </Card.Text>
                    <Card.Text>{card.cardtext}</Card.Text>
                    </Card.Body>
                    <Button className='remove-card' variant='outline-danger' onClick={() => handleDelete({card})}>
                        <FontAwesomeIcon icon={faTrash}/> Remove Card
                    </Button>
                </Card>
            </div>
        ))}
    </div>
  )
}

export default RenderDeckCards