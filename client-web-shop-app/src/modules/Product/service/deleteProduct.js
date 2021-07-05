import { errorToast } from '../../../common/toasts/error';
import { successToast } from '../../../common/toasts/success';

const axios = require('axios');

export async function deleteProduct(id, jwt) {
	return new Promise(function (resolve, reject) {
		axios
			.delete('http://localhost:3000/api/product/' + id, {
				headers: {
					Authorization: `Bearer ${jwt}`,
				},
			})
			.then((response) => {
				resolve(response.data);
				successToast('Sucess delete !');
			})
			.catch(() => {
				errorToast('Error durring deleting product!');
			});
	});
}
