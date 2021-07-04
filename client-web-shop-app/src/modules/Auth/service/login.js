import { errorToast } from '../../../common/toasts/error';
import { successToast } from '../../../common/toasts/success';

const axios = require('axios');

export async function login(email, password) {
	return new Promise(function (resolve, reject) {
		axios
			.post('http://localhost:3000/api/users/login', {
				email: email,
				password: password,
			})
			.then(function (response) {
				resolve(response.data);
				successToast('Sucess login, go and buy some products!');
			})
			.catch(function () {
				errorToast('Error, your credentials are wrong!');
			});
	});
}
