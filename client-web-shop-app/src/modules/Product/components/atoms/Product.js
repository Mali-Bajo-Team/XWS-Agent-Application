import './Product.modules.css';
import { UserContext } from '../../../Auth/context/UserContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
	const { user } = useContext(UserContext);

	return (
		<div className="product-preview">
			<div className="headerWithAddToCart">
				<h3>{product.name}</h3>

				{user.role === 'admin' ? (
					<Link
						onClick={() => {
							console.log('edit simulation');
						}}
						to={`/products/edit/${product.id}`}
					>
						E
					</Link>
				) : (
					''
				)}
				{user.role === 'admin' ? (
					<button
						onClick={() => {
							console.log('delete simulation');
						}}
					>
						D
					</button>
				) : (
					''
				)}
				{user.role === 'user' ? (
					<button
						onClick={() => {
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
		</div>
	);
};

export default Product;
