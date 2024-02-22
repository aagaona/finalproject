import React, { useContext } from 'react'
import { AppContext } from '../Store/AppContext';

function SelectedDeck() {
    
    const {store} = useContext(AppContext);

    if (!store.selecteddeck) return;
  
    return (
    <div>BOOM</div>
  )
}

export default SelectedDeck