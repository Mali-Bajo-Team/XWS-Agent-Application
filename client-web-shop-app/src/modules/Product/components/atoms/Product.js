import './Product.modules.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../Auth/context/UserContext';
import { useContext } from 'react';

const Product = ({ product }) => {
	const { user } = useContext(UserContext);

	return (
		<div className="product-preview">
			{/* We will uncomment if we want to go to the product details !! */}
			{/* <Link to={`/products/${product.id}`}> */}
			<div className="headerWithAddToCart">
				<h3>{product.name}</h3>
				{user.role == 'user' ? (
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
			{/* </Link> */}
		</div>
	);
};

export default Product;
