import { useMemo, useState, createContext, useEffect } from 'react';
import useFetch from '../../../common/hooks/useFetch';

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
	const {
		error,
		isPending,
		data: fetchedProducts,
	} = useFetch('http://localhost:3000/api/product/');

	const [products, setProducts] = useState(fetchedProducts);
	const providerProducts = useMemo(
		() => ({ products, setProducts }),
		[products, setProducts]
	);

	useEffect(() => {
		localStorage.setItem('products', JSON.stringify(products));
	}, [products]);

	useEffect(() => {
		console.log('\n promenjen fetched products\n');
		setProducts(fetchedProducts);
	}, [fetchedProducts]);

	return (
		<ProductsContext.Provider value={providerProducts}>
			{children}
			{console.log(fetchedProducts)}
			{console.log('error: ' + error)}
			{console.log('is pending: ' + isPending)}
		</ProductsContext.Provider>
	);
};

export default ProductsContextProvider;
