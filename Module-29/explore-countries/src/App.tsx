import { Suspense } from 'react';
import './App.css'
import type { CountryType } from './type';
import Countries from './components/Countries/Countries';



// step 1: Create a function to fetch data from the API and return the data as a promise of type CountryType[].
const countriesPromise = async (): Promise<CountryType[]> => {
  const res = await fetch('https://openapi.programming-hero.com/api/all');
  const data = await res.json();
  return data.countries;
}

function App() {

  return (
    <>
      <h2>Exploring The World</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Countries countriesPromise={countriesPromise()} />
      </Suspense>
    </>
  )
}

export default App
