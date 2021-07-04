import { useContext, useState } from 'react';
import { UserContext } from '../../../context/UserContext';
import { Link } from 'react-router-dom';
import { login } from '../../../service/login';
import jwt_decode from "jwt-decode";

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { user, setUser } = useContext(UserContext);

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
							var user = await login(email, password);	
							setUser(user);	
							console.log(user)	
							var decoded = jwt_decode(user.access_token);
							console.log(decoded.user.username);
						}}
					>
						Login
					</button>
					<Link to="/signup">
						<button> Sign Up </button>
					</Link>
				</div>

				<h2>{user ? 'Email: ' + user.email : 'email: no user'}</h2>
			</form>
		</div>
	);
};

export default Login;
