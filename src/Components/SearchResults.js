import axios from 'axios'
import React, { useContext } from 'react'
import { Button, Card, CardBody } from 'react-bootstrap'
import { AppContext } from '../Store/AppContext';

function SearchResults({card, onCardSelect}) {

    const {dispatch} = useContext(AppContext)

    const handleSelect = () => {
        onCardSelect(card);
        handleAdd({ card });
      };

    async function handleAdd({card}) {
        try{
        
        await axios.post('https://65d116a8ab7beba3d5e4149f.mockapi.io/commanderdecks', {
            commander: card.name,
            typeline: card.type_line,
            image: card.image_uris.art_crop,
            totalgames: 0,
            wincount: 0,
            lastresult: null,
            cardimage: card.image_uris.normal,
            coloridentity: card.color_identity,
          });

          const getData = async () => {
            try {
                let resp = await axios.get('https://65d116a8ab7beba3d5e4149f.mockapi.io/commanderdecks');
                console.log(resp.data);

                dispatch({type: 'retrieveDecks',payload: resp.data})

            } catch(error){console.error("Error fetching data:", error);
            };
          }

          getData();

        }catch (error){console.error("Error fetching data:", error);
        };
    };

    return (
        <div className='individualSearchCard'>
            <Card style={{width: '15rem', height: '29rem'}}>
                <Card.Img variant='top' src={card.image_uris.normal} />
                <CardBody>
                    <Card.Title>
                        {card.name}
                    </Card.Title>
                    <Button variant="dark" onClick={() => handleSelect({card})}>Select Commander</Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default SearchResults