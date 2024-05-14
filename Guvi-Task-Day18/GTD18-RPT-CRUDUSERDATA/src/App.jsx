import { useEffect } from 'react'
import './App.css'
import { AppContext } from './Context/UserContext'
import { Routes, Route } from 'react-router-dom'
import UserCardsPage from './Pages/UserCardsPage'
import AddUpdateFormPage from './Pages/AddUpdateFormPage'
import EditUserPage from './Pages/EditUserPage'

// Main App
function App() {

  const {setUserData} = AppContext();

  useEffect (() => {
    fetch ("https://6604ddfa2ca9478ea17ea44d.mockapi.io/users", {method : "GET"})
    // fetch ("https://jsonplaceholder.typicode.com/users", {method : "GET"})
    .then((res) => res.json() )
    .then((data) => {
       console.log("Hi", data);
       setUserData(data);
      })
    .catch((error) => console.log(error))
  }, [])

  return (
    <>
      <Routes>
        <Route exact path="/" element={<UserCardsPage />} />
        <Route path="/adduser" element={<AddUpdateFormPage />} />
        <Route path="/edituser" element={<EditUserPage />} />
      </Routes>
    </>
  )
}

export default App
