import { Suspense } from 'react'
import './App.css'
import Batter from './Batter'
import Counter from './Counter'
import Users from './Users'
// import type Cart from './Cart'

function App() {

  function handleClick() {
    alert('Button clicked!')
  }
  const handleClick2 = () => {
    alert('Button clicked 2!')
  }

  const addToCart = (id) => {
    alert('Added to cart! ' + id)
  }

  const usersDataPromise = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return data;
  }

  return (
    <>
      <h1>Users</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Users usersDataPromise={usersDataPromise()} />
      </Suspense>


      <h1>Counter</h1>
      <Counter></Counter>

      <h1>Batter</h1>
      <Batter></Batter>

      <br />
      <br />
      <h2>My Shopping Cart </h2>
      {/* <Cart></Cart> */}

      <br />
      <br />

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={() => addToCart(20)}>Add to Cart</button>
    </>
  )
}

export default App

