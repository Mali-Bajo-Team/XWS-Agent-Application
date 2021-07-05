import { errorToast } from '../../../common/toasts/error';
import { successToast } from '../../../common/toasts/success';

const axios = require('axios');

export async function editProduct(id, name, price, available, jwt) {
	return new Promise(function (resolve, reject) {
		axios
			.put(
				'http://localhost:3000/api/product/' + id,
				{
					name: name,
					price: price,
					available: available,
				},
				{
					headers: {
						Authorization: `Bearer ${jwt}`,
					},
				}
			)
			.then((response) => {
				resolve(response.data);
				successToast('Sucess changed a product!');
			})
			.catch(() => {
				errorToast('Error, your fields have mistakes!');
			});
	});
}
