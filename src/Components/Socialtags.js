import { faArrowsToDot, faClock, faLocationDot, faMapLocationDot, faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { Button, Card, CardBody, CardGroup, CardHeader, CardLink, ListGroup, ListGroupItem, Nav } from 'react-bootstrap'
import { AppContext } from '../Store/AppContext'

function Socialtags() {

    const {store} = useContext(AppContext)

  return (
    <>
        <CardGroup>
            <Card bg='primary' text='white' border='light' style={{width: '60%'}}>
                <CardHeader>
                    <Card.Title>
                        Facebook
                    </Card.Title>
                </CardHeader>
                <CardBody>
                    <Card.Text>
                        Join our local Facebook Community to keep up to date on events and meet other Spellslingers!
                    </Card.Text>
                    <Button variant='outline-light' href='https://www.facebook.com/'>
                        <FontAwesomeIcon icon={faShareNodes}/> Join our Facebook Community!
                    </Button>
                </CardBody>
            </Card>
            <Card bg='secondary' text='light' border='light' style={{width: '60%'}}>
                <CardHeader>
                    <Card.Title>
                        Instagram
                    </Card.Title>
                </CardHeader>
                <CardBody>
                    <Card.Text>
                        Follow for us on Instgram for info about our podcast, card previews and a fine selection of curated memes!
                    </Card.Text>
                    <Button variant='outline-light' href='https://www.instagram.com/'>
                        <FontAwesomeIcon icon={faShareNodes}/> Follow our Instgram!
                    </Button>
                </CardBody>
            </Card>
            <Card bg='dark' text='white' border='info' style={{width: '60%'}}>
                <CardHeader>
                    <Card.Title>
                        Threads
                    </Card.Title>
                </CardHeader>
                <CardBody>
                    <Card.Text>
                        Follow on Threads for up to date news, reactions and discussion about the MTG!
                    </Card.Text>
                    <Button variant='outline-light' href='https://www.threads.net/login'>
                        <FontAwesomeIcon icon={faShareNodes}/> Latest Updates on Threads!
                    </Button>
                </CardBody>
            </Card>
            <Card bg='warning' text='dark' border='dark' style={{width: '60%'}}>
                <CardHeader>
                    <Card.Title>
                        eBay
                    </Card.Title>
                </CardHeader>
                <CardBody>
                    <Card.Text>
                        The best place to find the best cards at the best price from the best people! 
                    </Card.Text>
                    <Button variant='outline-dark' href='https://www.ebay.com/'>
                        <FontAwesomeIcon icon={faShareNodes}/> Purchase Singles and Sealed Products!
                    </Button>
                </CardBody>
            </Card>
        </CardGroup>
        <br />
        <Card bg='dark' text='white' border='light' style={{width: '60%'}}>
            <CardHeader>
                <Card.Title>
                    <FontAwesomeIcon icon={faLocationDot}/> Visit Us in Store!
                </Card.Title>
            </CardHeader>
            <CardBody>
                <Card.Text style={{textAlign: 'center'}}>
                    <div className='google-maps'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340.804874046992!2d-117.18334988787109!3d33.1404904734034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc7557598bc745%3A0x5a7c0bf743bc0ea7!2sKnowhere%20Games%20%26%20Comics!5e0!3m2!1sen!2sus!4v1708712353091!5m2!1sen!2sus" width="600" height="450" style={{border: 0, borderRadius: '10px'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </Card.Text>
                <Card.Text style={{textAlign: 'center'}}>
                    <strong>Store Address</strong>
                    <br/>
                        {store.address.street}
                    <br/>
                        {store.address.city}, {store.address.state} {store.address.zip}
                </Card.Text>
                <ListGroup style={{backgroundColor: '#141414'}}>
                    <ListGroup.Item style={{backgroundColor: '#747474', color: 'white'}}>
                        <FontAwesomeIcon icon={faClock}/> Hours
                    </ListGroup.Item>
                    <ListGroup.Item style={{backgroundColor: '#141414', color: 'white'}}>
                        <strong>Monday:</strong> 9:00 am - 9:00 pm
                    </ListGroup.Item>
                    <ListGroup.Item style={{backgroundColor: '#141414', color: 'white'}}>
                        <strong>Tuesday:</strong> 9:00 am - 9:00 pm
                    </ListGroup.Item>
                    <ListGroup.Item style={{backgroundColor: '#141414', color: 'white'}}>
                        <strong>Wednesday:</strong> 9:00 am - 9:00 pm
                    </ListGroup.Item>
                    <ListGroup.Item style={{backgroundColor: '#141414', color: 'white'}}>
                        <strong>Thursday:</strong> 9:00 am - 9:00 pm
                    </ListGroup.Item>
                    <ListGroup.Item style={{backgroundColor: '#141414', color: 'white'}}>
                        <strong>Friday:</strong> 9:00 am - 9:00 pm
                    </ListGroup.Item>
                    <ListGroup.Item style={{backgroundColor: '#141414', color: 'white'}}>
                        <strong>Saturday:</strong> 9:00 am - 9:00 pm
                    </ListGroup.Item>
                    <ListGroup.Item style={{backgroundColor: '#141414', color: 'white'}}>
                        <strong>Sunday:</strong> 9:00 am - 9:00 pm
                    </ListGroup.Item>
                </ListGroup>
            </CardBody>
        </Card>
    </>
  )
}

export default Socialtags