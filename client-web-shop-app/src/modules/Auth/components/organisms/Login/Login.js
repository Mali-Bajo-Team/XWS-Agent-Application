import { useContext, useState } from 'react';
import { ToastContainer } from 'react-toastify';

import { UserContext } from '../../../context/UserContext';
import { Link } from 'react-router-dom';
import { login } from '../../../service/login';
import jwt_decode from 'jwt-decode';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { setUser } = useContext(UserContext);

	return (
		<div className="customForm">
			<h2>Welcome, login to continue!</h2>
			<form>
				<label>Email:</label>
				<input
					type="text"
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
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
						onClick={async (e) => {
							e.preventDefault();
							var loggedUser = await login(email, password);
							var decodedToken = jwt_decode(loggedUser.access_token);
							var parsedLoggedUser = decodedToken.user;
							setUser(parsedLoggedUser);
							localStorage.setItem(
								'loggedUser',
								JSON.stringify(parsedLoggedUser)
							);
						}}
					>
						Login
					</button>
					<Link to="/signup">
						<button> Sign Up </button>
					</Link>
				</div>
			</form>
			<ToastContainer />
		</div>
	);
};

export default Login;
