import { useMemo, useState, createContext } from 'react';

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
	const [products, setProducts] = useState([
		{ name: 'Omeksivac', price: 15, availability: 10, pathToImage: '', id: 1 },
		{
			name: 'Omlet lepinja',
			price: 20,
			availability: 3,
			pathToImage: '',
			id: 2,
		},
		{ name: 'Jabuka', price: 10, availability: 0, pathToImage: '', id: 3 },
	]);
	const providerProducts = useMemo(
		() => ({ products, setProducts }),
		[products, setProducts]
	);

	return (
		<ProductsContext.Provider value={providerProducts}>
			{children}
		</ProductsContext.Provider>
	);
};

export default ProductsContextProvider;
