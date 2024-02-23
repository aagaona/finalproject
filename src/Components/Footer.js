import { faDiceD20, faWandMagic, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        <span>
          <FontAwesomeIcon icon={faDiceD20}/> Power Play Gamez <FontAwesomeIcon icon={faWandMagicSparkles} />
        </span>
        <p>
            429 Autumn Dr. San Marcos Ca, 92069
            <br/>
            Memebers of the Safe Gamer Alliance
        </p>
    </div>
  )
}

export default Footer