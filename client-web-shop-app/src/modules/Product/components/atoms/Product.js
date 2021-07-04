import './Product.modules.css';
import { UserContext } from '../../../Auth/context/UserContext';
import { useContext } from 'react';

const Product = ({ product }) => {
	const { user } = useContext(UserContext);

	return (
		<div className="product-preview">
			<div className="headerWithAddToCart">
				<h3>{product.name}</h3>
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
