import { useMemo, useState, createContext } from 'react';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
	let tempUser = localStorage.getItem('loggedUser');
	tempUser = tempUser ? JSON.parse(tempUser) : null;
	const [user, setUser] = useState(tempUser);
	const providerUser = useMemo(() => ({ user, setUser }), [user, setUser]);
	return (
		<UserContext.Provider value={providerUser}>{children}</UserContext.Provider>
	);
};

export default UserContextProvider;
