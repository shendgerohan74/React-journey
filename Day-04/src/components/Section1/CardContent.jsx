import { ArrowRight } from 'lucide-react'

const CardContent = (props) => {
  // console.log(props.id);
  
  
  return (
    <div className='absolute h-full top-0 left-0 p-10 flex flex-col justify-between'>

      <div className='rounded-full bg-white h-10 w-10 flex items-center justify-center '>
        <h1 className='font-bold text-xl'>{props.id}</h1>
      </div>

      <div>
        <p className='font-medium text-amber-50 mb-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis autem fuga repellat eius beatae provident quisquam nihil tempore voluptas?
        </p>
        <div className='flex items-center justify-between'>
          <button className='rounded-full bg-blue-400 px-4 py-2'>{props.tag1}</button>
          <button className='rounded-full bg-blue-400 px-2 py-2'><ArrowRight /></button>
        </div>
      </div>
    </div>
  )
}

export default CardContent
