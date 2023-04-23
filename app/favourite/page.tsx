'use client'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../GlobalRedux/strore'
import Favourites from '../components/Favourites'
const Favourite = () => {
  return (
    <Provider store={store}>
          <Favourites/>
    </Provider>


  )
}

export default Favourite