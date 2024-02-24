import React, { useContext } from 'react'
import { AppContext } from '../Store/AppContext'
import { Card, CardBody, CardFooter, CardGroup, CardImg, CardText, CardTitle, Spinner } from 'react-bootstrap';

function AboutCards() {

    const { store } =useContext(AppContext);

    if (!store.randomPlains || !store.randomIsland || !store.randomSwamp || !store.randomMountain || !store.randomForest || !store.randomMulti || !store.randomArtifact) {
      return (
        <>
            <Spinner animation='border' role='status'>
            </Spinner>
            <br/>
            <span> Checking State...</span>
        </>
      );
    }

  return (
    <>
        <CardGroup>
            <Card key={store.randomArtifact.id} bg='dark' text='white' border='secondary'>
                <CardImg variant='top' src={store.randomArtifact.image_uris.normal} />
                <CardBody>
                    <CardTitle>{store.randomArtifact.name}</CardTitle>
                    <CardText>
                        <strong>Colorless</strong>
                        <br/>
                        Colorless has two in-game meanings. It is either a type of objects or a type of mana. Note that colorless is not a color, and is not represented in the color wheel. Since colorless is not a color it can be used in any Commander Deck. However if you Commander has a colorless identity you may only include Colorless cards in your deck. Artifacts are the most common colorless spell, and Eldrazi creatures were made colorless to mark them as alien.
                    </CardText>
                </CardBody>
                <CardFooter>
                    <small>Commander Legality: {store.randomArtifact.legalities.commander}</small>
                </CardFooter>
            </Card>
            <Card key={store.randomPlains.id} bg='dark' text='white' border='light'>
                <CardImg variant='top' src={store.randomPlains.image_uris.normal} />
                <CardBody>
                    <CardTitle>{store.randomPlains.name}</CardTitle>
                    <CardText>
                        <strong>Plains | White</strong>
                        <br/>
                        White embodies the principles of morality and order. White makes use of and puts value in a number of broad concepts; morality (ethics, religion), order (law, discipline), uniformity (conformity), and structure (government, planning).
                        In White's belief, there is little grey area in morality (as morality is defined, clarified, and guided by rules of ethics) and thus very little room for straying from the path.
                    </CardText>
                </CardBody>
                <CardFooter>
                    <small>Commander Legality: {store.randomPlains.legalities.commander}</small>
                </CardFooter>
            </Card>

            <Card key={store.randomIsland.id} bg='dark' text='white' border='primary'>
                <CardImg variant='top' src={store.randomIsland.image_uris.normal} />
                <CardBody>
                    <CardTitle>{store.randomIsland.name}</CardTitle>
                    <CardText>
                        <strong>Island | Blue</strong>
                        <br/>
                        Blue embodies the concepts of logic and technology and seeks perfection through knowledge.
                        Mastery of possibility, mastery of essence, is exactly what Blue pursues. Thus, Blue comes to prize knowledge. It is with the knowledge that Blue will unlock great possibilities, and changes itself for the better. With all knowledge—omniscience—blue can make itself perfect.
                    </CardText>
                </CardBody>
                <CardFooter>
                    <small>Commander Legality: {store.randomIsland.legalities.commander}</small>
                </CardFooter>
            </Card>

            <Card key={store.randomSwamp.id} bg='dark' text='white' border='dark'>
                <CardImg variant='top' src={store.randomSwamp.image_uris.normal} />
                <CardBody>
                    <CardTitle>{store.randomSwamp.name}</CardTitle>
                    <CardText>
                        <strong>Swamp | Black</strong>
                        <br/>
                        Black embodies the principles of free will and amorality.
                        Black follows a simple rule: don't follow any rule. It looks for any opportunity to get ahead, and takes advantage of it without mercy or shame. Of course, killing and sowing terror is not a problem for Black either. All living beings are subject to fear, and Black does not hesitate to provoke and use the fear of others to achieve its purposes
                    </CardText>
                </CardBody>
                <CardFooter>
                    <small>Commander Legality: {store.randomSwamp.legalities.commander}</small>
                </CardFooter>
            </Card>

            <Card key={store.randomMountain.id} bg='dark' text='white' border='danger'>
                <CardImg variant='top' src={store.randomMountain.image_uris.normal} />
                <CardBody>
                    <CardTitle>{store.randomMountain.name}</CardTitle>
                    <CardText>
                        <strong>Mountain | Red</strong>
                        <br/>
                        Red embodies the principles of impulse and chaos.
                        Impulse, to Red, means emotional action. By doing as one's heart desires, and only by doing so, one can find happiness with the experience one has to show for it. With Chaos Red creates the freedom for anyone to express his or her emotions. In a sense, by opening up new possibilities, Red's Chaos frees novel experiences from the "lattice" of the status quo.
                    </CardText>
                </CardBody>
                <CardFooter>
                    <small>Commander Legality: {store.randomMountain.legalities.commander}</small>
                </CardFooter>
            </Card>

            <Card key={store.randomForest.id} bg='dark' text='white' border='success'>
                <CardImg variant='top' src={store.randomForest.image_uris.normal} />
                <CardBody>
                    <CardTitle>{store.randomForest.name}</CardTitle>
                    <CardText>
                        <strong>Forest | Green</strong>
                        <br/>
                        Green embodies seeking harmony or acceptance through growth, or growth through wisdom.
                        Green sees the struggle between predator and prey as a central part of the natural order and so places great value on strength. When in battle, Green does not favor trickery or evasion to steal the victory, relying instead on pitting its' natural strength against that of its opponents. The strong will triumph, and the weak will fall.
                    </CardText>
                </CardBody>
                <CardFooter>
                    <small>Commander Legality: {store.randomForest.legalities.commander}</small>
                </CardFooter>
            </Card>

            <Card key={store.randomMulti.id} bg='dark' text='white' border='warning'>
                <CardImg variant='top' src={store.randomMulti.image_uris.normal} />
                <CardBody>
                    <CardTitle>{store.randomMulti.name}</CardTitle>
                    <CardText>
                        <strong>Multicolored | Gold</strong>
                        <br/>
                        Gold cards were introduced in the Legends set, and use a gold card frame to distinguish them. For this reason, they also can be referred to as "gold" cards. Multicolored cards require mana from two or more different colors to be played. Multicolored cards tend to combine the philosophy and mechanics of all the colors used in the spell's cost. Multicolored cards can combine anywhere from 2-5 different colors of Magic. 
                    </CardText>
                </CardBody>
                <CardFooter>
                    <small>Commander Legality: {store.randomMulti.legalities.commander}</small>
                </CardFooter>
            </Card>
        </CardGroup>
    </>
  )
}

export default AboutCards