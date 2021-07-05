import './Product.modules.css';
import { UserContext } from '../../../Auth/context/UserContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { deleteProduct } from '../../service/deleteProduct';
import { ToastContainer } from 'react-toastify';
import { ProductsContext } from '../../context/ProductsContext';

const Product = ({ product }) => {
	const { user } = useContext(UserContext);
	const { products, setProducts } = useContext(ProductsContext);

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
							console.log('delete simulation');
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
						onClick={async (e) => {
							console.log('add to the cart simulation');
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
