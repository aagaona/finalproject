import React, { useContext } from 'react'
import { AppContext } from '../../Store/AppContext'
import Cardbanner from '../Cardbanner'
import PPGWelcome from '../PPGWelcome'
import RandomCard from '../RandomCard'

function Home() {

  const {decks, setDecks} = useContext(AppContext)

  return (
    <div>
      <div>
        <Cardbanner />
      </div>
      <br />
      <div>
        <PPGWelcome />
      </div>
      <div>
        <RandomCard />
      </div>
    </div>
  )
}

export default Home