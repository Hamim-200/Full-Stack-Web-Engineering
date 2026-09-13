import { Suspense, useState } from "react";
import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import Players from "./components/players/Players";
import type { Iplayer } from "./Type/Player";


const playersFetch = async () : Promise<Iplayer[]> => {
  const res = await fetch('/data.json')
  const data = await res.json();
  return data;
}

function App() {
  // const playersPromise = playersFetch();

  const [playersPromise] = useState(()=>playersFetch());

  const [coin, setCoin] = useState(5000);

  return (

    <>
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>
      <Suspense fallback= {<span className="loading loading-spinner text-success"></span>}>
        <Players 
        playersPromise={playersPromise}
        coin = {coin}
        setCoin= {setCoin}
        
        ></Players>
      </Suspense>
    </>
  )
}

export default App
