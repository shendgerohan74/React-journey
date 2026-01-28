import React from 'react'
import Section1 from './components/Section1/Section1'


const App = () => {
  const content = [
    {
      id:1,
      image:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
      tag1:"Satisfied",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eum dolorum nam doloribus dolorem alias magni neque hic animi error delectus, adipisci fugit minima assumenda debitis sed sunt itaque quos totam corrupti officia nihil."
    },
    {
      id:2,
      image:"https://plus.unsplash.com/premium_photo-1672691612351-7473de67b85c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
      tag1:"Confused",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eum dolorum nam doloribus dolorem alias magni neque hic animi error delectus, adipisci fugit minima assumenda debitis sed sunt itaque quos totam corrupti officia nihil."
    },
    {
      id:3,
      image:"https://plus.unsplash.com/premium_photo-1664301707741-64d7d40be3f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2Zlc3Npb25hbCUyMG1hbiUyMHN0cmVzc2VkfGVufDB8fDB8fHww",
      tag1:"Stressed",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eum dolorum nam doloribus dolorem alias magni neque hic animi error delectus, adipisci fugit minima assumenda debitis sed sunt itaque quos totam corrupti officia nihil."
    },
    {
      id:4,
      image:"https://images.unsplash.com/photo-1610768817286-f516e0616629?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag1:"Happy",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eum dolorum nam doloribus dolorem alias magni neque hic animi error delectus, adipisci fugit minima assumenda debitis sed sunt itaque quos totam corrupti officia nihil."
    }


  ]
  
  return (
    <div>
      <Section1 content={content}/>
    </div>
  )
}

export default App
