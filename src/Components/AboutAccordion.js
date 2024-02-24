import React, { useContext } from 'react'
import { Accordion } from 'react-bootstrap'
import { AppContext } from '../Store/AppContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'

function AboutAccordion() {

    const {store} = useContext(AppContext)

  return (
    <Accordion style={{width: '75%', marginLeft: 'auto', marginRight: 'auto'}}>
        <Accordion.Item eventKey='0'>
            <div style={{backgroundColor: 'green'}}>
                <Accordion.Header style={{backgroundColor: '#747474'}}>
                    <FontAwesomeIcon icon={faBook}/>What even is Commander?
                </Accordion.Header>
            </div>
            <Accordion.Body style={{backgroundColor: '#282c34', color: 'white'}}>
                Commander is for fun. It’s a socially interactive, multiplayer Magic: the Gathering format full of wild interactions and epic plays, specifically designed as an alternative to tournament Magic. As is fitting for a format in which you choose an avatar to lead your forces into battle, Commander focuses on a resonant experience. Each game is a journey the players share, relying on a social contract in which each player is considerate of the experiences of everyone involved–this promotes player interaction, inter-game variance, a variety of play styles, and a positive communal atmosphere. At the end of an ideal Commander game, someone will have won, but all participants will have had the opportunity to express themselves through their deck building and game play.
                <br />
                <br />
                The rules of Commander are designed to maximize these experiences within a game of Magic. The addition of a commander, larger life total, and deck building restrictions emphasize the format’s flavor; they increase deck variance and add more opportunities for participation and expression.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
            <Accordion.Header>
                <FontAwesomeIcon icon={faBook}/> So how do I build a Commander Deck?
            </Accordion.Header>
            <Accordion.Body style={{backgroundColor: '#282c34', color: 'white'}}>
                <ol className='rulestext'>
                    <li>
                        Players choose a legendary creature as the commander for their deck.
                    </li>
                    <li>
                        A card’s color identity is its color plus the color of any mana symbols in the card’s rules text. A card’s color identity is established before the game begins, and cannot be changed by game effects. The cards in a deck may not have any colors in their color identity which are not in the color identity of the deck’s commander.
                    </li>
                    <li>
                        A Commander deck must contain exactly 100 cards, including the commander. If you’re playing a companion, it must adhere to color identity and singleton rules. While it is not part of the deck, it is effectively a 101st card.
                    </li>
                    <li>
                        With the exception of basic lands, no two cards in the deck may have the same English name. Some cards (e.g. Relentless Rats) may have rules text that overrides this restriction.
                    </li>
                </ol>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='2'>
            <Accordion.Header>
                <FontAwesomeIcon icon={faBook}/> How do we Play?
            </Accordion.Header>
            <Accordion.Body style={{backgroundColor: '#282c34', color: 'white'}}>
            <ol>
                <li>
                    Players begin the game with 40 life.
                </li>
                <li>
                    Commanders begin the game in the Command Zone. While a commander is in the command zone, it may be cast, subject to the normal timing restrictions for casting creatures. Its owner must pay 2 for each time it was previously cast from the command zone; this is an additional cost.
                </li>
                <li>
                    If a commander is in a graveyard or in exile and that card was put into that zone since the last time state-based actions were checked, its owner may put it into the command zone. If a commander would be put into its owner’s hand or library from anywhere, its owner may put it into the command zone instead. This replacement effect may apply more than once to the same event.
                </li>
                <li>
                    Being a commander is not a characteristic [MTG CR109.3], it is a property of the card and tied directly to the physical card. As such, “commander-ness” cannot be copied or overwritten by continuous effects. The card retains it’s commander-ness through any status changes, and is still a commander even when controlled by another player.
                </li>
                <li>
                    If a player has been dealt 21 points of combat damage by a particular Commander during the game, that player loses a game.
                </li>
                <li>
                    Parts of abilities which bring other traditional card(s) you own from outside the game into the game (such as Living Wish; Spawnsire of Ulamog; Karn, the Great Creator; Wish) do not function in Commander.
                </li>
            </ol>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className='item' eventKey='3'>
            <Accordion.Header style={{backgroundColor: '#747474'}}>
                <FontAwesomeIcon icon={faBook}/>Who makes the official rules?
            </Accordion.Header>
            <Accordion.Body style={{backgroundColor: '#282c34', color: 'white'}}>
            The rules for Commander are set by the Commander Rules Committee (“the RC” or “CRC”) and updated approximately every 3 months, if needed.   The RC receives input from the Commander Advisory Group (the CAG), a team of community leaders with diverse opinions and extensive contacts, who represent a breadth of perspectives on the format, while sharing the RC’s vision for Commander.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className='item' eventKey='4'>
            <Accordion.Header style={{backgroundColor: '#747474'}}>
                <FontAwesomeIcon icon={faBook}/> What is Color identity?
            </Accordion.Header>
            <Accordion.Body style={{backgroundColor: '#282c34', color: 'white'}}>
            The color identity of a card is the combination of all colors in its mana cost, any color indicator or color-setting characteristic-defining abilities on the card and any mana symbols in the card's rules text. When determining a card's color identity, any mana symbols in the card's reminder text are ignored. This is to prevent cards like Charmed Pendant and Trinisphere from having a color identity when their reminder text is only an example of how the card functions.[1]
            <br/>
            <br/>
            The color identity of a card does not include colors when they are written as words. Cards which set the color of another object (e.g. the black Rat tokens created by Mad Ratter), don't count that color towards their own color identity. In the same manner, cards that have "tap: Add one mana of any color." do not have a color identity of W,U,B,R,G because no mana symbols appear in that ability.
            <br/>
            <br/>
            Cards that do not have any colors in their casting cost, any color indicator or color-setting characteristic-defining abilities on the card nor any mana symbols in the card's rules text (excluding any reminder text) do not have a color identity. This is equivalent to colorless cards, which do not have a color. Cards without a color identity (e.g. City of Brass) may be included in decks with any commander.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className='item' eventKey='5'>
            <Accordion.Header style={{backgroundColor: '#747474'}}>
                <FontAwesomeIcon icon={faBook}/> Why does hybrid mana work the way it does?
            </Accordion.Header>
            <Accordion.Body style={{backgroundColor: '#282c34', color: 'white'}}>
            In Commander, a Hybrid mana symbol contributes all of its colours to the colour identity of the card, so Spitting Image can only go in decks whose commander is blue AND green.
            <br />
            <br />
            REASON: Costs containing hybrid mana symbols can be paid for with either colour, but they contribute both colours to the card they appear on.  This isn’t Commander specific. The aforementioned Spitting Image can be countered with Red Elemental Blast, and can’t target a creature with protection from green. 
            <br />
            <br />
            A card’s Colour Identity is similar to its Colour, but slightly different.  When the rules for Commander (née EDH) were formed, the decision was made to make colour identity more strict than colour (it includes the colour of mana symbols in the text box), to restrict the card pool and encourage diversity in deckbuilding. 
            <br />
            <br />
            The RC feels that relaxing the definition of colour identity to allow hybrid to ignore a symbol on the card would make the rule more complex, and decrease deck diversity, for very little gain.  We do not expect this definition of colour identity to ever change.
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
  )
}

export default AboutAccordion