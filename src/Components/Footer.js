import { faDiceD20, faWandMagic, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { AppContext } from '../Store/AppContext'

function Footer() {

  const {store} = useContext(AppContext);

  return (
    <div className='footer'>
        <span>
          <FontAwesomeIcon icon={faDiceD20}/> Power Play Gamez
        </span>
        <p>
            {store.address.street}, {store.address.city}, {store.address.state} {store.address.zip}
            <br/>
            Memebers of the Safe Gamer Alliance
        </p>
    </div>
  )
}

export default Footer