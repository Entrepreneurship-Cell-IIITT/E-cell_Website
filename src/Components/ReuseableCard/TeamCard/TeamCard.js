import React from 'react'
import './TeamCard.css'

function TeamCard({ image, name, des, margin }) {
  return (
    <div>
      <>
        <div class="card" style={{ margin: `${margin ? "60px" : "60px"} 40px` }}>
          <img className="card-image" src={image} alt="profile" />
          <h1>{name}</h1>
          <h2>{des}</h2>
        </div>
      </>
    </div>
  )
}

export default ReuseableCard
