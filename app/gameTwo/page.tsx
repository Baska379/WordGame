'use client'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../GlobalRedux/strore'
const Game2 = () => {
  return (
    <Provider store={store}>
        <div className='grid grid-rows-2 mt-12'>
            <div className='grid grid-cols-2'>
                <div>1</div>
                <div>2</div>
            </div>
            <div className=''>3</div>
        </div>
    </Provider>
    
  )
}

export default Game2