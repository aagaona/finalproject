import React, { useContext } from 'react'
import { AppContext } from '../../Store/AppContext'
import Cardbanner from '../Cardbanner'

function Home() {

  const {decks, setDecks} = useContext(AppContext)

  return (
    <div>
      <h1>Power Play Gamez: Command Zone</h1>
      <div>
        <Cardbanner />
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Home