import React from 'react'

const Card = (props) => {
  console.log(props)
  return (
    <div>
      
      <div className="Card-1">
        <img src="https://plus.unsplash.com/premium_photo-1724307396655-9396c5729c7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0aXZpdHl8ZW58MHwyfDB8fHww" alt="" />
        
        <span><h3>{props.user}</h3></span>
        <span>Age : {props.age}</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quae distinctio.</p>
      </div>
    </div>
  )
}

export default Card
