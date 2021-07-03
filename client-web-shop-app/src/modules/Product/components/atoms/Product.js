import './Product.modules.css';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
	return (
		<div className="product-preview">
			{/* We will uncomment if we want to go to the product details !! */}
			{/* <Link to={`/products/${product.id}`}> */}
			<div className="headerWithAddToCart">
				<h3>{product.name}</h3>
				<button
					onClick={() => {
						console.log('add to the cart simulation');
					}}
				>
					+
				</button>
			</div>
			<p>Price per product: {product.price} $</p>
			{/* </Link> */}
		</div>
	);
};

export default Product;
