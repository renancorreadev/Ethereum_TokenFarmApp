import React from 'react'
import Header from './components/Header/Header'
import MainAdmin from './components/MainAdmin/MainAdmin'
import FooterPage from './components/FooterPage/FooterPage'
import '@fortawesome/fontawesome-free/css/all.min.css'

export const Admin = () => {
  return (
    <div className="App">
      <Header />
      <MainAdmin />
      <FooterPage />
    </div>
  )
}
