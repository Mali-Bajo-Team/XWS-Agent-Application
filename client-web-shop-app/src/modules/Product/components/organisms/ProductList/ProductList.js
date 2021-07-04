import './ProductList.modules.css';
import Product from '../../atoms/Product';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../Auth/context/UserContext';

const ProductList = ({ title }) => {
	const [products] = useState([
		{ name: 'Omeksivac', price: 15, availability: 10, pathToImage: '', id: 1 },
		{
			name: 'Omlet lepinja',
			price: 20,
			availability: 3,
			pathToImage: '',
			id: 2,
		},
		{ name: 'Sta god', price: 10, availability: 0, pathToImage: '', id: 3 },
	]);
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
			{products.map((product) => (
				<Product key={product.id} product={product} />
			))}
		</div>
	);
};

export default ProductList;
