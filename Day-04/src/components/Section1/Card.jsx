import React from 'react'
import CardContent from './CardContent'
import { ArrowRight } from 'lucide-react'

const Card = (props) => {
  // console.log(props.tag1);
  console.log(props.id);
  
  
  return (
    <>
      <div className='relative h-[80vh] w-1/3 p-3 flex'>
        <div>
          <img className='h-full object-cover rounded-3xl' src={props.image} alt="" />
        </div>
        <CardContent id={props.id} tag1={props.tag1}/>
      </div>
    </>
  )
}
export default Card