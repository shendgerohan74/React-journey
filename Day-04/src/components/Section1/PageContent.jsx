import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'


const pageContent = (props) => {
  return (
    
    <div className='my-10 flex gap-10 '>
        <LeftContent />
        <RightContent content={props.content}/>
    </div>
  )
}

export default pageContent
