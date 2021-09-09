import { Link } from 'react-router-dom';
import './CartItem.css';

const CartItem = ({ item, qtyChangeHandler,  removeItemHandler }) => { 
  
  return (
    <div className='cartitem'>
      <div className='cartitem_image'>
        <img src={item.imageURL} alt={item.name} 
        />
      </div>
      <Link to={`/product/${item.product}`} className='cartitem_name'>
        <p>{item.name}</p>
      </Link>
      <p className='cartitem_price'>${item.price}</p>
      <select 
        className='cartitem_select' 
        value={item.qty} 
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
      >
        {[...Array(item.countInStock).keys()].map(x => (
          <option key={x +  1} value={x + 1}> {x + 1} </option>
        ))}
      </select>
      <button className='cartitem_deleteBtn' onClick={() =>  removeItemHandler(item.product)}>
        <i className='fas fa-trash'></i>
      </button>
    </div>
  );
}
 
export default CartItem;