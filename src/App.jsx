import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [characters, setCharacters] = useState([])

  const getApi = async () => {
    try {
      const res = await fetch('https://rickandmortyapi.com/api/character')
      const data = await res.json()

      console.log(data.results)

      setCharacters(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getApi()
  }, [])

  return (
    <div className="App">
      {characters.map((character) => (
        <div key={character.id}>
          <h3 className="name">{character.name}</h3>
          <img className="img" src={character.image} alt="" />
          <p className="species">{character.species}</p>
        </div>
      ))}
    </div>
  )
}

export default App
