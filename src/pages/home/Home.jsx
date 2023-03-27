import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import Zoom from '../../Components/Zoom'
import './home.css'


const Home = () => {
  return (
    <>
      <Navbar/>
      <div classsName="Container">
      <div className="Wrapper">
        <div className="Heading">MEET</div>
        <div className="ButtonDiv">
          <button>New Meeting</button>
          <button>Join Meeting</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home