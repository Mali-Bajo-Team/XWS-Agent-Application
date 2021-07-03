import './ProductList.modules.css';
import Product from '../../atoms/Product';
import { useState } from 'react';

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

	return (
		<div className="product-list">
			<h3>{title}</h3>
			{products.map((product) => (
				<Product key={product.id} product={product} />
			))}
		</div>
	);
};

export default ProductList;
