import './App.css'

function App() {

  return (
    <>
      <h1>Welcome to React</h1>
      <Person />
      <Gadgets></Gadgets>
      <Student />
      <Student />
      <Student />
      <Student />
    </>
  )
}


function Student(){
  return(
    <div className="student">
      <h1>Student</h1>
      <p>I am a student</p>
    </div>
  )
}

function Person(){
  return <p>I am here</p>
}

function Gadgets(){
  return(
    <>
      <h1>Gadgets</h1>  
      <p>I am a gadget</p>
      <h2>Hello gadgets</h2>
      <p>Sum {2+3}</p>
    </>
  )
}

export default App
