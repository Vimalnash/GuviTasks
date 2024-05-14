import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { CartPage } from './Pages/CartPage'
import ShoppingPage from './Pages/Shopping'
import { useDispatch, useSelector } from 'react-redux'
import { setproducts } from './Reducers/ProductSlice'

function App() {
  // const [productData, setProductData] = useState([])
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("../product.json", {method: "GET"})
    .then((res) => res.json())
    .then((data) => {
      // console.log(data.products);
      const dataArr = data.products;
      // setProductData(dataArr);
      dispatch(setproducts({productArr : dataArr}))
  })
  }, [])

  return (
    <>
      <Routes>
        <Route exact path="/" element={<ShoppingPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  )
}

export default App
