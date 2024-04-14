import { useState } from 'react';
import './App.css';

// returns Item Card with details to add or remove from cart
function ItemCard({val, setCount}) {
  const [show, setShow] = useState(true);

  return (
    <div className="card">
      <div className="card-header">
        <img src="" className="card-image" alt="..." />
      </div>
      <div className="card-body">
        <h3>{val}</h3>

        <div>
          <button className="btn">Add to Cart</button>
        </div>
      </div>
    </div>
  )
};

// Creates a Items List Container and mapping array of items
// and returns a item card component
function ItemContainer({count, setCount, itemsArr}) {
  return(
    <div className="item-container">
      {itemsArr.map((val, index) => {
        return <ItemCard key={index} val={val} count={count} setCount={setCount} />
      })
      }
    </div>
  )
};


function App() {
  const [count, setCount] = useState(0)
  //creating array of item names
  const itemsArr = [];
  for (let i=1; i<=10; i++) {
    itemsArr.push(`Item${[i]}`);
  };
  return (
    <>
      <div className="app-menu">
        <h3>Welcome to Shopping Site</h3>
        <button className='cart-btn'>
          <span className="material-symbols-outlined">shopping_cart</span>
          <span>Cart - {count}</span>
        </button>
      </div>
      <div className="app-welcomebox">
        <div className="welcome-title">
          <h1>Shop in style</h1>
          <span>Your favourite items search ends here</span>
        </div>
      </div>

      <ItemContainer count={count} setCount={setCount} itemsArr={itemsArr}/>
    </>
  )
};

export default App
