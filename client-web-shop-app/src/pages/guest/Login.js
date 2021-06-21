import { useState } from 'react';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

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
					<button>Login</button>
					<button>Sign Up </button>
				</div>
			</form>
		</div>
	);
};

export default Login;
