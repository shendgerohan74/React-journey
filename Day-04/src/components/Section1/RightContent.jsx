import React from 'react'
import Card from './Card'

const rightContent = (props) => {
  return (
    <div className='h-[80vh] w-2/3 flex '>
      {/* <Card content={props.content[0]}/>
      <Card content={props.content[1]}/>
      <Card content={props.content[2]}/> */}
      {props.content.map((item)=>(
        <Card id={item.id} image={item.image} tag1={item.tag1}/>
      ))}
    </div>
  )
}

export default rightContent
