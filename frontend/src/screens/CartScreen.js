import './CartScreen.css'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//components
import CartItem from '../components/CartItem';
//actions
import { addToCart, removeFromCart } from '../redux/actions/cartActions';

const CartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart); //data from cartReducer/store
  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => { //function that updates(rechange) the qty from CartItem
    dispatch(addToCart(id, qty))
  };
  const removeItemHandler = (id) => {
    dispatch(removeFromCart(id))
  };
  const getCartCount = () => { 
    return cartItems.reduce((qty, items) => Number(items.qty) + qty, 0);
  };
  const getCartSubTotal = () => {
    return cartItems.reduce((price,item) => (item.price * item.qty) + price, 0)
  };

  return (
    <div className='cartscreen'>
      <div className='cartscreen_left'>
        <h2>Shopping Cart</h2> 
        {cartItems.length === 0 ? ( <div>Your cart is empty <Link to="/">go Back</Link></div>) : (
          cartItems.map(item => <CartItem key={item} item={item} qtyChangeHandler={qtyChangeHandler} removeItemHandler={removeItemHandler}/>)
        )} 
      </div>
      <div className='cartscreen_right'>
        <div className='cartscreen_info'>
          <p>Subtotal ({getCartCount()}) items</p>
          <p>${getCartSubTotal().toFixed(2)}</p>
        </div>
        <div>
          <button>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
}
 
export default CartScreen; 