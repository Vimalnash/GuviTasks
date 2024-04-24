import { useEffect } from 'react'
import './App.css'
import CartPage from './Components/Cart';
import { CartUseContext } from './Context/CreateContext';

// Main App
function App() {
  const {setProducts} = CartUseContext();

  useEffect(() => {
    fetch("../db/product.json", {method:"GET"})
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const productarr = data.products;
        setProducts(productarr);
        })
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <CartPage />
    </>
  )
}

export default App
