import Task from './Task'
import Todo from './Todo'
import './App.css'
import Book from './Book';
import Users from './Users';


function App() {
  const books = ['The Great Gatsby', 'To Kill a Mockingbird', '1984', 'Pride and Prejudice', 'The Catcher in the Rye'];

  return (
    <>
      <h1>Welcome to React</h1>
      <Person />
      <Gadgets></Gadgets>

      <Student name="Jane" age={22} />
      {/* <Student name="Jim" age={21} />
      <Student name="Jill" age={23} />
      <Student name="Jack" age={24} />

      <Developer name="Alice" stack="React, Node.js" />
      <Developer name="Bob" stack="Angular, Express.js" />
      <Developer name="Charlie" stack="Vue, Django" /> */}
      <Developer name="Jon" stack="React, Django" />
      <Todo task="Learn React" time="2 hours"></Todo>
      <Todo task="Learn Redux" time="3 hours"></Todo>
      <Todo task="Learn HTML" time="1 hours"></Todo>

      <h1>Task Part</h1>
      <Task task="Complete React Project " isDone={true} ></Task>
      <Task task="Complete React Project " isDone={false} ></Task>

      <h2>Many Books</h2>
      {
        books.map(book => <><li>{book}</li></>)
      }

      <h2>Many Books from different page</h2>
      {
        books.map(book => <Book name={book}></Book>)
      }

      <h2>Users Data</h2>
      <Users></Users>
    </>
  )
}

function Developer(props) {
  return (
    <div className="developer">
      <h1>My Name is {props.name}. I am a developer</h1>
      <p>My Stack: {props.stack}</p>
    </div>
  )
}


function Student(props) {
  console.log("Inside the student component", props);
  return (
    <div className="student">
      <h1>Student Name : {props.name} </h1>
      <p>My Age is : {props.age}</p>
      <p>I am a student</p>
    </div>
  )
}

function Person() {
  return <p>I am here</p>
}

function Gadgets() {
  return (
    <>
      <h1>Gadgets</h1>
      <p>I am a gadget</p>
      <h2>Hello gadgets</h2>
      <p>Sum {2 + 3}</p>
    </>
  )
}

export default App


