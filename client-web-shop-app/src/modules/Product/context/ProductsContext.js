import { useMemo, useState, createContext, useEffect } from 'react';

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
	let tempProducts = localStorage.getItem('products');
	const [products, setProducts] = useState(
		tempProducts ? JSON.parse(tempProducts) : []
	);
	const providerProducts = useMemo(
		() => ({ products, setProducts }),
		[products, setProducts]
	);

	useEffect(() => {
		localStorage.setItem('products', JSON.stringify(products));
	}, [products]);

	return (
		<ProductsContext.Provider value={providerProducts}>
			{children}
		</ProductsContext.Provider>
	);
};

export default ProductsContextProvider;
