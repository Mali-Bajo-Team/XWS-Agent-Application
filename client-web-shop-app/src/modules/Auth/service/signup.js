const axios = require('axios');

export async function signUp(username, name, email, surname, password){

	return new Promise(function(resolve, reject) {
			axios.post('http://localhost:3000/api/users/', {
                name: name,
                username: username,
				surname: surname,
                email: email,
                password: password,
                role: "user"
			})
			.then(function (response) {
				resolve (response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	  });

  };