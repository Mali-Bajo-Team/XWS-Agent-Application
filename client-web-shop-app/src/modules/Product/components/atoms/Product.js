import './Product.modules.css';
import { UserContext } from '../../../Auth/context/UserContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { deleteProduct } from '../../service/deleteProduct';
import { ToastContainer } from 'react-toastify';
import { ProductsContext } from '../../context/ProductsContext';
import { ShoopingCartContext } from '../../../ShopingCart/context/ShoppingCartContext';
import { successToast } from '../../../../common/toasts/success';

const Product = ({ product }) => {
	const { user } = useContext(UserContext);
	const { products, setProducts } = useContext(ProductsContext);
	const { shoopingCart, setShoopingCart } = useContext(ShoopingCartContext);

	return (
		<div className="product-preview">
			<div className="headerWithAddToCart">
				<h3>{product.name}</h3>

				{user.role === 'admin' ? (
					<Link
						onClick={() => {
							console.log('edit simulation');
						}}
						to={{
							pathname: '/products/edit',
							state: product,
						}}
					>
						/
					</Link>
				) : (
					''
				)}
				{user.role === 'admin' ? (
					<button
						onClick={async (e) => {
							e.preventDefault();
							await deleteProduct(product.id, user.jwt);
							setProducts(
								products.filter((tempProduct) => tempProduct.id !== product.id)
							);
						}}
					>
						X
					</button>
				) : (
					''
				)}
				{
					/* just to move button to the right */
					user.role === 'user' ? <div></div> : ''
				}
				{user.role === 'user' ? (
					<button
						onClick={(e) => {
							e.preventDefault();
							setShoopingCart([...shoopingCart, product]);
							successToast('Sucess added a product to the shopping cart!');
						}}
					>
						+
					</button>
				) : (
					''
				)}
			</div>
			<p>Price per product: {product.price} $</p>
			<ToastContainer />
		</div>
	);
};

export default Product;
