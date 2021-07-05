import { errorToast } from '../../../common/toasts/error';
import { successToast } from '../../../common/toasts/success';

const axios = require('axios');

export async function createNewProduct(name, price, available) {
	return new Promise(function (resolve, reject) {
		axios
			.post('http://localhost:3000/api/product/', {
				name: name,
				price: price,
				available: available,
			})
			.then((response) => {
				resolve(response.data);
				successToast('Sucess created new product!');
			})
			.catch(() => {
				errorToast('Error, your fields have mistakes!');
			});
	});
}
