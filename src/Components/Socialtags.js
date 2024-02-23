import { faArrowsToDot, faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Socialtags() {
  return (
    <>
        <div>
            <h4>
                Facebook
            </h4>
            <FontAwesomeIcon icon={faShareNodes}/>
        </div>
        <div>
            <h4>
                Instagram
            </h4>
            <FontAwesomeIcon icon={faShareNodes}/>
        </div>
        <div>
            <h4>
                Threads
            </h4>
            <FontAwesomeIcon icon={faShareNodes}/>
        </div>
        <div>
            <h4>
                eBay
            </h4>
            <FontAwesomeIcon icon={faShareNodes}/>
        </div>
        <div>
            <h4>
                Visit us in Store!
            </h4>
            <FontAwesomeIcon icon={faArrowsToDot}/>
        </div>
    </>
  )
}

export default Socialtags