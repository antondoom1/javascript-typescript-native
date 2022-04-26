import React from 'react'
import './App.css'

function App() {
  const names = ['Anton', 'Dasha', 'Dima', 'Natasha', 'Igor']
  const users = [
    {id: 1, name: 'Anton'},
    {id: 2, name: 'Dasha'},
    {id: 3, name: 'Dima'},
    {id: 4, name: 'Natasha'},
    {id: 5, name: 'Igor'}
  ]

  const liElements = users.map(el => <li key={el.id}>{el.name}</li>)

  return (
    <div className="App">
      <ul>
        {liElements}
      </ul>
    </div>
  )
}

export default App
