import React from 'react'

function CardPoster({deck}) {
  return (
    <div>
        <img src={deck.cardimage} />
    </div>
  )
}

export default CardPoster