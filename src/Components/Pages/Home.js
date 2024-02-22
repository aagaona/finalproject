import React, { useContext } from 'react'
import { AppContext } from '../../Store/AppContext'

function Home() {

  const {decks, setDecks} = useContext(AppContext)

  return (
    <div>Home</div>
  )
}

export default Home