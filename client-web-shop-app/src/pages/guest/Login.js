import { useContext, useState } from 'react';
import { UserContext } from '../../common/context/UserContext';
import { Link } from 'react-router-dom';
import { login } from '../../service/login';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const { user, setUser } = useContext(UserContext);

	return (
		<div className="customForm">
			<h2>Welcome, login to continue!</h2>
			<form>
				<label>Username:</label>
				<input
					type="text"
					required
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>

				<label>Password:</label>
				<input
					type="text"
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<div className="authButtons">
					<button
						onClick={async () => {
							const tempUser = await login();
							setUser(tempUser);
						}}
					>
						Login
					</button>
					<Link to="/signup">
						<button> Sign Up </button>
					</Link>
				</div>

				<h2>{user ? 'username: ' + user.username : 'username: no user'}</h2>
			</form>
		</div>
	);
};

export default Login;
