import React from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import FooterPage from './components/FooterPage/FooterPage'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './globalstyles.css'
export const MainApp = () => {
  return (
    <>
      <Header />
      <Main />
      <FooterPage />
    </>
  )
}
