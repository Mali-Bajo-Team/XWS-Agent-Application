const axios = require('axios');

export const login = async () => {
	axios.post('http://localhost:3000/api/users/login', {
		email: 'admin@gmail.com',
		password: '12345'
	  })
	  .then(function (response) {
		console.log(response);
	  })
	  .catch(function (error) {
		console.log(error);
	  });

	// return {
	// 	id: 4,
	// 	username: 'bob',
	// 	email: 'bob@bob.com',
	// 	role: 'admin',
	// };
};
