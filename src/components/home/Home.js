import React from 'react'
import Header from '../header/Header'
import UpLoadImg from '../uploadImg/UpLoadImg'
import "../home/Home.css"

export default function Home() {
  return (
    <div className="home">
      <Header showParam/>
      <UpLoadImg/>
    </div>
  )
}
