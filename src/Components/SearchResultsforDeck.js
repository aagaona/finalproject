import axios from 'axios'
import React, { useContext } from 'react'
import { Button, Card, CardBody } from 'react-bootstrap'
import { AppContext } from '../Store/AppContext';

function SearchResultsforDeck({deck, card, onCardSelect}) {

    const {dispatch} = useContext(AppContext)

    const handleSelect = () => {
        onCardSelect(card);
        handleAdd({ card });
      };

    async function handleAdd({card}) {
        try{
        
        await axios.post(`https://65d116a8ab7beba3d5e4149f.mockapi.io/commanderdecks/${deck.id}/cards`, {
            cardname: card.name,
            typeline: card.type_line,
            cmc: card.cmc,
            cardimage: card.image_uris.normal,
            coloridentity: card.color_identity,
            cardtext: card.oracle_text,
          });

          const getData = async () => {
            try {
                let resp = await axios.get(`https://65d116a8ab7beba3d5e4149f.mockapi.io/commanderdecks/${deck.id}/cards`);
                console.log(resp.data);

                dispatch({type: 'updateSelectedDeck',payload: resp.data})

            } catch(error){console.error("Error fetching data:", error);
            };
          }

          getData();

        }catch (error){console.error("Error fetching data:", error);
        };
    };

    return (
        <div className='individualSearchCard'>
            <Card bg='secondary' text='light' border='light' style={{width: '15rem', height: '29rem'}}>
                <Card.Img variant='top' src={card.image_uris.normal} />
                <CardBody>
                    <Card.Title>
                        {card.name}
                    </Card.Title>
                    <Button variant="dark" onClick={() => handleSelect({card})}>Select Card</Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default SearchResultsforDeck