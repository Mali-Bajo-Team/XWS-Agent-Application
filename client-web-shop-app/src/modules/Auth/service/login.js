const axios = require('axios');

export const login = async () => {
	axios.get('http://localhost:3000/api/users/4')
 		 .then(function (response) {
    // handle success
    	console.log(response);
 	 })
 	 .catch(function (error) {
    	// handle error
     console.log(error);
  	})
  	.then(function () {
  	  // always executed
 	 });

	return {
		id: 4,
		username: 'bob',
		email: 'bob@bob.com',
		role: 'admin',
	};
};
