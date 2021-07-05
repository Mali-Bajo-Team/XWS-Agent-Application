import { useMemo, useState, createContext, useEffect } from 'react';
import useFetch from '../../../common/hooks/useFetch';

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
	const { data: fetchedProducts } = useFetch(
		'http://localhost:3000/api/product/'
	);

	const [products, setProducts] = useState(fetchedProducts);
	const providerProducts = useMemo(
		() => ({ products, setProducts }),
		[products, setProducts]
	);
	useEffect(() => {
		setProducts(fetchedProducts);
	}, [fetchedProducts]);

	return (
		<ProductsContext.Provider value={providerProducts}>
			{children}
		</ProductsContext.Provider>
	);
};

export default ProductsContextProvider;
