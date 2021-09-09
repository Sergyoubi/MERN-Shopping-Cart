import './HomeScreen.css';
import { useEffect } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';

//components
import Product from '../components/Product';

//actions
import { getProducts as listProducts } from '../redux/actions/productActions'


const Homescreen = () => {

  const dispatch = useDispatch();
  const getProducts = useSelector (state => state.getProducts); //data from reducers => store
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <div className='homescreen'>
      <h2 className='homescreen_title'>Latest Products</h2>
      <div className='homescreen_products'>
        {loading && <h3>Loading...</h3>}
        {error && <h3>{error}</h3>}
        {products && products.map((product) => (
          <Product 
            key={product._id} 
            productId={product._id}
            name={product.name}
            price={product.price}
            description={product.description}
            imageURL={product.imageURL}
          />
        ))}
      </div>
    </div>
  );
}
 
export default Homescreen;