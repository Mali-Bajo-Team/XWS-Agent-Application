const axios = require('axios');

export async function login(email, password){

	return new Promise(function(resolve, reject) {

			axios.post('http://localhost:3000/api/users/login', {
				email: email,
				password: password
			})
			.then(function (response) {
				resolve (response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	  });

  };