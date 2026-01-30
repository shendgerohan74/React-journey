import React from 'react'

const App = () => {

  const btnClicked = (e) => {
    e.preventDefault()
    console.log("Form Submitted");
    alert("Submit Successful")
  }

  return (
    <div>
      <form onSubmit={(e) => {
        btnClicked(e);
      }}>
        <input type="text" placeholder='Enter your username'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
