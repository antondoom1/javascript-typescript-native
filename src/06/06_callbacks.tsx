import React from 'react'

export const User = () => {
  const deleteUser = () => {
    alert('user has been deleted')
  }

  const saveUser = () => {
    alert('user has been saved')
  }
  return <div>Anton
    <button onClick={deleteUser}>delete</button>
    <button onClick={saveUser}>save</button>
  </div>
}