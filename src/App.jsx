import React from 'react'
import './App.css'
import Header from './components/header/header'
import ExpandYourBusiness from './components/expandYourBusiness/expandYourBusiness'
import Feedbacks from './components/feedbacks/feedbacks'
import OurServices from './components/ourServices/ourServices'
import SetaUp from './components/setaUp/setaUp'
import Footer from './components/footer/footer'

export default function App() {
  return (
    <>
      <Header />
      <ExpandYourBusiness /> 
      <OurServices />
      <Feedbacks />
      <Footer />
      <SetaUp />
    </>
  )
}