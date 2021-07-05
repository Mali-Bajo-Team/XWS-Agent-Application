import { useMemo, useState, createContext } from 'react';

export const ShoopingCartContext = createContext();

const ShoopingCartContextProvider = ({ children }) => {
	const [shoopingCart, setShoopingCart] = useState([]);
	const providerShoopingCart = useMemo(
		() => ({ shoopingCart, setShoopingCart }),
		[shoopingCart, setShoopingCart]
	);

	return (
		<ShoopingCartContext.Provider value={providerShoopingCart}>
			{children}
		</ShoopingCartContext.Provider>
	);
};

export default ShoopingCartContextProvider;
