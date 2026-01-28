import React from 'react'
import Navbar from './Navbar'
import PageContent from './pageContent'

const section1 = (props) => {
  console.log(props.content);
  
  return (
    <div className=' h-screen w-full px-16 py-8'>
      <Navbar />
      <PageContent content={props.content}/>
    </div>
  )
}

export default section1
