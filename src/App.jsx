import React from 'react'
import './App.css'
import Header from './components/header/header'
import ExpandYourBusiness from './components/expandYourBusiness/expandYourBusiness'
import Feedbacks from './components/feedbacks/feedbacks'

export default function App() {
  return (
    <>
      <Header />
      <ExpandYourBusiness /> 
      <Feedbacks />
    </>
  )
}