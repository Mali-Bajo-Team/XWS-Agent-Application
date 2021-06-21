import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Home = () => {
	const { user, setUser } = useContext(UserContext);

	return (
		<div className="home">
			<h1> Home </h1>
			<h2>{user}</h2>
			<button onClick={() => setUser('pero')}> change user </button>
		</div>
	);
};

export default Home;
