import { useState } from 'react'
import './all.css'

const All = () => {

  const [selected, setSelected] = useState({
    date: true,
    duration: false,
  })

  return (
    <div className='allContainer'>
      <div className="allContainerHeading">
        <p>All Calls</p>
      </div>
      
      <div className="allCalls">
        <div className="allCall">
          <div className="allBlank"></div>
          <div className="allInfo">
            <div className="allHeading">Heading</div>
            <div className="allSubInfo">Jul 19 , 2022, Reps name, client's name</div>
          </div>
        </div>
        <div className="allCall">
          <div className="allBlank"></div>
          <div className="allInfo">
            <div className="allHeading">Heading</div>
            <div className="allSubInfo">Jul 19 , 2022, Reps name, client's name</div>
          </div>
        </div>
        <div className="allCall">
          <div className="allBlank"></div>
          <div className="allInfo">
            <div className="allHeading">Heading</div>
            <div className="allSubInfo">Jul 19 , 2022, Reps name, client's name</div>
          </div>
        </div>
        <div className="allCall">
          <div className="allBlank"></div>
          <div className="allInfo">
            <div className="allHeading">Heading</div>
            <div className="allSubInfo">Jul 19 , 2022, Reps name, client's name</div>
          </div>
        </div>
        <div className="allCall">
          <div className="allBlank"></div>
          <div className="allInfo">
            <div className="allHeading">Heading</div>
            <div className="allSubInfo">Jul 19 , 2022, Reps name, client's name</div>
          </div>
        </div>
        <div className="allCall">
          <div className="allBlank"></div>
          <div className="allInfo">
            <div className="allHeading">Heading</div>
            <div className="allSubInfo">Jul 19 , 2022, Reps name, client's name</div>
          </div>
        </div>
        <div className="allCall">
          <div className="allBlank"></div>
          <div className="allInfo">
            <div className="allHeading">Heading</div>
            <div className="allSubInfo">Jul 19 , 2022, Reps name, client's name</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default All