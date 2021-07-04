import { successToast } from '../../../common/toasts/success';
import { errorToast } from '../../../common/toasts/error';

const axios = require('axios');
export async function signUp(username, name, email, surname, password) {
	return new Promise(function (resolve, reject) {
		axios
			.post('http://localhost:3000/api/users/', {
				name: name,
				username: username,
				surname: surname,
				email: email,
				password: password,
				role: 'user',
			})
			.then(function (response) {
				resolve(response.data);
				successToast('Sucess sign in, go and log in!');
			})
			.catch(function (error) {
				console.log(error);
				errorToast('Error during sing up !');
			});
	});
}
