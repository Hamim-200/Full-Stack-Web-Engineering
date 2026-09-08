import { Suspense } from 'react';
import './App.css'
import Post from './Post';


const postDataPromise = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return data;
}
function App() {

  return (
    <>
      <h2>Load Data from JSON PLACEHOLDER <code>POST</code></h2>

      <Suspense fallback={<h1>Loading...</h1>}>
        <Post postDataPromise={postDataPromise()} />
      </Suspense>
    </>
  )
}

export default App
