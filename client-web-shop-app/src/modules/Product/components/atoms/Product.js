import './Product.modules.css';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
	return (
		<div className="product-preview">
			<Link to={`/products/${product.id}`}>
				<h2>{product.name}</h2>
				<p>Price per product: {product.price} $</p>
			</Link>
		</div>
	);
};

export default Product;
