import { useSelector, useDispatch } from "react-redux";
import { addQty, reduceQty } from '../Reducers/CartSlice';
import { useState } from "react";
import { StarIcon } from '@heroicons/react/24/solid'

// Create CartPage
export function CartPage() {
  const product = useSelector((state) => state.product);

    return (
        <>
            <div>
                <h2>Your Finalized Cart</h2>
                <div className="cart-view">
                  <div className="cart-container">
                    {
                      product.productsArr.map((val, idx) => {
                        return <CreateCard key={idx} val={val}/>
                      })
                    }
                  </div>
                  <div className="cart-total">
                    <GrandTotal />
                  </div>
                </div>
            </div>

        </>
    )
}

// Creating Item Carts
function CreateCard({val}) {
  
  const dispatch = useDispatch();

  const itemPriceDiscounted = (val.price - ((val.price * val.discountPercentage)/100));
  const discountedAmt = ((val.price * val.discountPercentage)/100);

  const [itemStock, setItemStock] = useState(val.stock);
  const [itemPurchQty, setItemPurchQty] = useState(1);
  const [itemTotAmt, setItemTotAmt] = useState(itemPriceDiscounted);

  // Redux dispatch used for cart total adding
  function addItemQty() {
    if (itemStock > 0) {
      setItemStock(itemStock - 1);
      setItemPurchQty(itemPurchQty + 1);
      setItemTotAmt(itemTotAmt + itemPriceDiscounted);
      dispatch(addQty({mrp_price: val.price, discountedAmt, itemPriceDiscounted}));
    };
  };

  // Redux dispatch used for cart total reducing
  function reduceItemQty() {
    if (itemPurchQty > 1) {
      setItemStock(itemStock + 1);
      setItemPurchQty(itemPurchQty - 1);
      setItemTotAmt(itemTotAmt - itemPriceDiscounted);
      dispatch(reduceQty({mrp_price: val.price, discountedAmt, itemPriceDiscounted}));
    };
  };

    return (
      <>
        <div className="cart">
            <div className="item-img-qty">
              <div className="item-img">
                <img src={val.thumbnail} width="200" height="200" alt="ProductImage"/>
              </div>
              <div className="item-qty">
                <button className="qtybtn" onClick={() => reduceItemQty()}>-</button>
                <span>{itemPurchQty}</span>
                <button className="qtybtn" onClick={() => addItemQty()}>+</button>
              </div>
            </div>
            <div className="item-details">
              <div className="item-title">{val.title}</div>
              <div className="item-rating">{val.rating} <StarIcon className="icon ratingicon" /> </div>
              <div>{val.description}</div>
              <div className="item-stock">
                {itemStock > 0 ?
                  (<div className="item-stock-yes">InStock - {itemStock} -  Book Soon</div>)
                  :
                  (<div className="item-stock-no">Out Of Stock</div>)
                }
              </div>
              <div className="item-price">
                <span className="item-mrp">M.R.P. : ₹{val.price} </span>
                <span className="item-discpercent"> | {val.discountPercentage}% Off |</span>
                <span className="item-discprice">  ₹{itemPriceDiscounted.toFixed(2)} |</span>
              </div>
              <div className="item-tot-price">
                ItemTotPrice : {Intl.NumberFormat('en-IN', {style: 'currency', currency: 'INR', minimumFractionDigits: 2}).format(itemTotAmt)}
              </div>
            </div>

        </div>
      </>
    )
  };

  
// Creating Grand Total view using data from redux useSelector method
function GrandTotal() {
  const cart = useSelector((state) => state.cart)

  return (
      <div className="grandtotalbox">
          <div className="grandtotal">
              <div className="grandtotalheader">
                  Cart Total
              </div>
              <div className="grandtotalcontent">
                  <div>
                      <span className="caption">Cart Qty</span>
                      <span className="value">{cart.grandTotalQty}</span>
                  </div>
                  <div>
                      <span className="caption">MRP Total</span>
                      <span className="value">{Intl.NumberFormat('en-IN', {style: 'currency', currency: 'INR', minimumFractionDigits: 2}).format(cart.grandTotalAmount_mrp)}</span>
                  </div>
                  <div>
                      <span className="caption">Discount</span>
                      <span className="value">-{Intl.NumberFormat('en-IN', {style: 'currency', currency: 'INR', minimumFractionDigits: 2}).format(cart.grandDiscountedAmount)}</span>
                  </div>
                  <div>
                      <span className="caption">Amount</span>
                      <span className="value">{Intl.NumberFormat('en-IN', {style: 'currency', currency: 'INR', minimumFractionDigits: 2}).format(cart.grandTotalAmount)}</span>
                  </div>
                  <div>
                      <span className="caption">RoundOff </span>
                      <span className="value">{(Math.round(cart.grandTotalAmount) - cart.grandTotalAmount).toFixed(2)}</span>
                  </div>
                  <div className="grandtotal-final">
                      <span className="caption">Amount Payable </span>
                      <span className="value">₹{Math.round(cart.grandTotalAmount)}</span>
                  </div>
              </div>
          </div>
      </div>
  )
};