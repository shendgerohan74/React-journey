import React from 'react'
import { ArrowUpRight } from 'lucide-react';


const leftContent = () => {
  return (
    <div className=' h-[80vh] w-1/3 justify-between flex flex-col px-10 py-10'>
      <div className="">
        <h1 className='text-7xl font-bold mb-5 '>Prospective <br /> <span className='text-gray-900'>customer </span> <br /> segmentation</h1>
        <p className='font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum dolore natus possimus vitae a accusamus aperiam modi aliquid sequi? Iste, in aspernatur. Id ab, at porro perferendis ex dolores voluptatem, quasi neque velit veritatis ipsa!</p>
      </div>
      <div className="">
        <ArrowUpRight className='h-15 w-15' />
      </div>
    </div>
  )
}

export default leftContent
