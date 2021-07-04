import './ProductList.modules.css';
import Product from '../../atoms/Product';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../Auth/context/UserContext';
import { ProductsContext } from '../../../context/ProductsContext';

const ProductList = ({ title }) => {
	const { products } = useContext(ProductsContext);
	const { user } = useContext(UserContext);

	return (
		<div>
			<div className="titleAndNewProduct">
				<h3>{title}</h3>
				{user.role === 'admin' ? (
					<Link
						onClick={() => {
							console.log('new product simulation');
						}}
						to={`/products/create`}
					>
						NEW
					</Link>
				) : (
					''
				)}
			</div>
			{products &&
				products.map((product) => (
					<Product key={product.id} product={product} />
				))}
		</div>
	);
};

export default ProductList;
