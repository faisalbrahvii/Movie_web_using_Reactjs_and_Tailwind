import React from 'react'
import Play from '../../assests/play/play.jpeg'
const PlayMovie = () => {
  return (
    <div>
     <div
          className="relative mb-4 bg-cover  bg-center rounded-lg"
          style={{
            backgroundImage: `url(${Play})`,
            height: "500px",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-75 rounded-lg"></div>
          
        </div>
    </div>
  )
}

export default PlayMovie
