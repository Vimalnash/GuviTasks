import { useEffect } from 'react'
import './App.css'
import LandingPage from './Pages/LandingPage'
import { UseAppContext } from './Context/AppContex'
import { Route, Routes } from 'react-router-dom';
import BooksDashboardPage from './Pages/BooksDashboardPage';
import BooksAddPage from './Pages/BooksAddPage';
import BooksUpdatePage from './Pages/BooksUpdatePage';
import AuthorsDashboardPage from './Pages/AuthorsDashboardPage';
import AuthorsAddPage from './Pages/AuthorsAddPage';
import AuthorsUpdatePage from './Pages/AuthorsUpdatePage';

// Main App
function App() {
  const {setBooksData, setAuthorsData} = UseAppContext();
  
  useEffect(() => {
    fetch("https://6604ddfa2ca9478ea17ea44d.mockapi.io/inter", {method:"GET"})
    .then((res) => res.json())
    .then((booksdata) => {
      console.log(booksdata);
      setBooksData(booksdata);
    })
  }, [])

  useEffect(() => {
    fetch("https://6604ddfa2ca9478ea17ea44d.mockapi.io/users", {method:"GET"})
    .then((res) => res.json())
    .then((authorsdata) => {
      console.log(authorsdata);
      setAuthorsData(authorsdata);
    })
  }, [])

  return (  
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/books/dashboard" element={<BooksDashboardPage />} />
        <Route path="/books/addnew" element={<BooksAddPage />} />
        <Route path="/books/edit" element={<BooksUpdatePage />} />
        <Route path="/authors/dashboard" element={<AuthorsDashboardPage />} />
        <Route path="/authors/addnew" element={<AuthorsAddPage />} />
        <Route path="/authors/edit" element={<AuthorsUpdatePage />} />
      </Routes>
      
    </>
  )
}

export default App
