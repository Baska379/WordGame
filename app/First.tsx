'use client'
import { Provider } from "react-redux";
import { store } from "./GlobalRedux/strore";
import React from 'react'
import FirstPage from "./components/FirstPage";
const first = () => {
  return (
<Provider store={store}>
        <FirstPage/>
    </Provider>
  )
}

export default first