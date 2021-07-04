import { useMemo, useState, createContext } from 'react';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const providerUser = useMemo(() => ({ user, setUser }), [user, setUser]);
	return (
		<UserContext.Provider value={providerUser}>{children}</UserContext.Provider>
	);
};

export default UserContextProvider;
