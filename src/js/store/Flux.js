const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			currentUser: null,
			isAuthenticated: "false",
			access_token: null,
			register: {
				error: "",
				finish: "false"
			},
			login: {
				error: "",
				finish: "false"
			},
			editFiles: {
				error: "",
				finish: "false"
			}
		},

		actions: {

			logout: () => {
				if(sessionStorage.getItem("currentUser") && sessionStorage.getItem("isAuthenticated")){
					sessionStorage.removeItem("currentUser");
					sessionStorage.removeItem("isAuthenticated");
					setStore({
						currentUser: null,
						isAuthenticated: null
					});
				}
			},

			isUserAuthenticated: () => {
				const store = getStore();

				if(sessionStorage.getItem("currentUser") && !store.currentUser){

					setStore({
						currentUser: JSON.parse(sessionStorage.getItem("currentUser")),
						isAuthenticated: sessionStorage.getItem("isAuthenticated")
					})
				}
			},

			createRegister(params) {
				const store = getStore();

				console.log("FORMULARIO ENVIADO CON EXITO");

				fetch('http://localhost:9000/api/professional/register', {
					method: "POST",
					body: params
				})
					.then(response => response.json())
					.then(data => {

						if(!data.access_token){
							setStore({
								access_token: null,
								isAuthenticated:  "false", // corregir a booleano
								currentUser: null,
								register: data.register
							})
						}else{
							setStore({
								access_token: data.access_token,
								isAuthenticated:  "true",
								currentUser: data.user,
								register: data.register
							})
						}
						sessionStorage.setItem("currentUser", JSON.stringify(store.currentUser));
						sessionStorage.setItem("isAuthenticated", store.isAuthenticated);
					})
					.catch(error => {
						//error handling
						console.log(error);
						setStore({
							currentUser: null,
							register: {
								error: error,
								finish: false,
							},
							isAuthenticated: "false"
						})

						sessionStorage.setItem("currentUser", null);
						sessionStorage.setItem("isAuthenticated", store.isAuthenticated);
					});
			},

			loginProfessional: async (data) => {
				const store = getStore();
				await fetch("http://localhost:9000/api/professional/login", {
					method: 'POST',
					body: JSON.stringify(data),
					headers: {
						'Content-Type': 'application/json'
					}
				})
				.then(response => response.json())
				.then(data => {

					if(!data.access_token){
						setStore({
							access_token: null,
							isAuthenticated:  "false",
							currentUser: null,
							login: data.login
						})
					}else{
						setStore({
							access_token: data.access_token,
							isAuthenticated:  "true",
							currentUser: data.user,
							login: data.login
						})
					}
					sessionStorage.setItem("currentUser", JSON.stringify(store.currentUser));
					sessionStorage.setItem("isAuthenticated", store.isAuthenticated);
				})
				.catch(error => {

					console.log(error);
					setStore({
						currentUser: null,
						login: {
							error: error,
							finish: false,
						},
						isAuthenticated: false
					})
					sessionStorage.setItem("currentUser", null);
					sessionStorage.setItem("isAuthenticated", store.isAuthenticated);
				});
			},

			clearmessage: () => {
				const store = getStore();
				if(store.login.error !== "" || store.register.error !== ""){
					setStore({
						login: {
							...store.login,
							error: ""
						},
						register: {
							...store.register,
							error: ""
						}
					});
				}
			},			
			},

			editFiles(e, id, params) {
				const store = getStore();
				fetch(`http://localhost:9000/api/professional/editar/${id}`, {
					method: "PUT",
					body: params,
					headers: {
						'Content-type': 'aplication/json',
						'Authorization': 'Bearer' + data.access_token,
					}
				})
					.then(response => response.json())
					.then(data => {

						if(!data.access_token){
							setStore({
								access_token: null,
								isAuthenticated:  "false", // corregir a booleano
								currentUser: null,
								editFiles: data.editFiles
							})
						}else{
							setStore({
								access_token: data.access_token,
								isAuthenticated:  "true",
								currentUser: data.user,
								editFiles: data.editFiles
							})
						}
						sessionStorage.setItem("currentUser", JSON.stringify(store.currentUser));
						sessionStorage.setItem("isAuthenticated", store.isAuthenticated);
					})
					.catch(error => {
						//error handling
						console.log(error);
						setStore({
							currentUser: null,
							register: {
								error: error,
								finish: false,
							},
							isAuthenticated: "false"
						})

						sessionStorage.setItem("currentUser", null);
						sessionStorage.setItem("isAuthenticated", store.isAuthenticated);
					});
			},
	};
};

export default getState;