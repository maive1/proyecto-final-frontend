const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			domain: "https://127.0.0.1:5000",
			channel_id: null,
			currentUser: null,
			isAuthenticated: "false",
			access_token: null,
			able_notifications: "",
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
			},
			requests: [],
			messages: [],
			modifiedFiles: null,
			professional: [],
		},

		actions: {

			sendHelpRequest: (entry) => {
				console.log(entry)
				const store = getStore();
				fetch(store.domain + "/api/patient_request", {
					method: 'POST',
					body: JSON.stringify(entry),
					headers: { "Content-Type": "application/json" }
				}).then(resp => console.log(resp))
				
			},

			setLoginPatient: (data) => {
				const store = getStore();
				if (!data.access_token) {
					setStore({
						access_token: null,
						isAuthenticated: "false", 
						currentUser: null,
						login: data.login
					})
					console.log("An error ocurred")
				} else {
					setStore({
						access_token: data.access_token,
						isAuthenticated: "true",
						currentUser: data.user,
						login: data.login
					})
					console.log("Store updated")
					sessionStorage.setItem("currentUser", JSON.stringify(store.currentUser));
					sessionStorage.setItem("isAuthenticated", store.isAuthenticated);
				}
			},

			setRegisterPatient: (data) => {
				const store = getStore();
				if (!data.access_token) {
					setStore({
						access_token: null,
						isAuthenticated: "false", // corregir a booleano
						currentUser: null,
						register: data.register
					})
					console.log("An error ocurred")
				}
				else {
					setStore({
						access_token: data.access_token,
						isAuthenticated: "true",
						currentUser: data.user,
						register: data.register
					})
					console.log("Store updated")
					sessionStorage.setItem("currentUser", JSON.stringify(store.currentUser));
					sessionStorage.setItem("isAuthenticated", store.isAuthenticated);
				}
			},

			logout: () => {
				sessionStorage.clear();
				setStore({
					channel_id: null,
					currentUser: null,
					isAuthenticated: "false",
					access_token: null,
					requests: [],
					messages: []
				})
			},

			setHandlingNotifications: async () => {
				const store = getStore();
				await fetch(store.domain + "/api/professional/" + store.currentUser.id + "/notifications/state", {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json'
					}
				})
				.then(response => response.json())
				.then(data => {
					if(data.state === 1) {
						setStore({able_notifications: true });
					}else{
						setStore({able_notifications: ""});
					}
				})
				.catch(error => {
					console.log(error);
					setStore({able_notifications: ""});
				});
			},

			changeNotificationsState: async (state) => {
				if(state === 1) {
					setStore({able_notifications: true });
				}else{
					setStore({able_notifications: ""});
				}

				const store = getStore();
				await fetch(store.domain + "/api/professional/handling/notifications", {
					method: 'POST',
					body: JSON.stringify({
						id: store.currentUser.id,
						state: state
					}),
					headers: {
						'Content-Type': 'application/json'
					}
				})
				.then(response => response.json())
				.then(data => {
					console.log(data.result);
				})
				.catch(error => {
					console.log(error);
				});
			},


			closeChannel: async () => {
				const store = getStore();
				await fetch(store.domain + "/api/channel/close", {
					method: 'POST',
					body: JSON.stringify({
						channel_id: store.channel_id,
						user_id: store.currentUser.id
					}),
					headers: {
						'Content-Type': 'application/json'
					}
				})
				.then(response => response.json())
				.then(data => {
					setStore({channel_id: null})
				})
				.catch(error => {
					console.log(error);
				});
			},

			isUserAuthenticated: () => {
				const store = getStore();

				if (sessionStorage.getItem("currentUser") && !store.currentUser) {

					setStore({
						currentUser: JSON.parse(sessionStorage.getItem("currentUser")),
						isAuthenticated: sessionStorage.getItem("isAuthenticated")
					})
				}
			},

			cleanChannel: () => {
				const store = getStore();
				if(sessionStorage.getItem("channel_id")){
					sessionStorage.removeItem("channel_id");
					setStore({ channel_id: null});
				}
				setStore({ channel_id: null});
			},

			isUserImChannel: () => {
				const store = getStore();
				if(sessionStorage.getItem("channel_id") && !store.channel_id){
					setStore({ channel_id: sessionStorage.getItem("channel_id")})
				}
			},

			getAllRequests: async () => {
				const store = getStore();
				await fetch(store.domain + "/api/professional/requests", {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json'
					}
				})
				.then(response => response.json())
				.then(data => {
					if(data.channels){
						setStore({requests: data.channels})
					}else {
						setStore({requests: []})
					}
				})
				.catch(error => {
					console.log(error);
					setStore({requests: []})

				});
			},

			getAllMessages: async (channel_id) => {
				const store = getStore();
				await fetch(store.domain + "/api/channel/"+channel_id+"/messages", {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json'
					}
				})
				.then(response => response.json())
				.then(data => {
					if(data.messages){
						setStore({messages: data.messages})
					}else {
						setStore({messages: []})
					}
				})
				.catch(error => {
					console.log(error);
					setStore({messages: []})

				});
			},

			recibeNewMessage: (message) => {
				const store = getStore();
				if(message){
					let messages = store.messages;
					messages.push(message)
					setStore({ messages: messages})
				}
			},

			setChannelId: (channel_id) => {
				if(channel_id){
					setStore({ channel_id: channel_id})
					sessionStorage.setItem("channel_id", channel_id);
				}
			},

			takeRequestAndOpenChat: async (channel) => {
				const store = getStore();
				let user_id = JSON.parse(sessionStorage.getItem("currentUser")).id
				await fetch(store.domain + "/api/professional/" + user_id + "/take/"+ channel, {
					method: 'POST',
					body: {},
					headers: {
						'Content-Type': 'application/json'
					}
				})
				.then(response => response.json())
				.then(data => {
					if(data.channel_id){
						sessionStorage.setItem("channel_id", data.channel_id);
					}else if(sessionStorage.getItem("channel_id")){
						sessionStorage.removeItem("channel_id");
					}
				})
				.catch(error => {
					console.log(error);
					if(sessionStorage.getItem("channel_id")){
						sessionStorage.removeItem("channel_id");
					}
				});
			},

			createRegister(params) {
				const store = getStore();

				console.log("FORMULARIO ENVIADO CON EXITO");

				fetch(store.domain + '/api/professional/register', {
					method: "POST",
					body: params
				})
					.then(response => response.json())
					.then(data => {
						console.log(data)
						if (!data.access_token) {
							setStore({
								access_token: null,
								isAuthenticated: "false", // corregir a booleano
								currentUser: null,
								register: data.register
							})
						} else {
							setStore({
								access_token: data.access_token,
								isAuthenticated: "true",
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
				await fetch(store.domain + "/api/professional/login", {
					method: 'POST',
					body: JSON.stringify(data),
					headers: {
						'Content-Type': 'application/json'
					}
				})
					.then(response => response.json())
					.then(data => {

						if (!data.access_token) {
							setStore({
								access_token: null,
								isAuthenticated: "false",
								currentUser: null,
								login: data.login
							})
						} else {
							setStore({
								access_token: data.access_token,
								isAuthenticated: "true",
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
				if (store.login.error !== "" || store.register.error !== "") {
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

			editFiles:  async (files, id) => {
				const store = getStore();
				const { domain } = store;				
				let data = JSON.parse(sessionStorage.getItem("currentUser"))
				
				const res = await fetch(domain + `/api/professional/files-edit/${id}`, {
					method: 'PUT',
					body: files,
					headers: {
						'Authorization': 'Bearer ' + data.access_token,
					},
				})
				const info = await res.json();
				console.log(info)
				if (info.msg) {
					setStore({
						modifiedFiles: info.msg
					})
				}
			},

			setProfessional: async (id) => {
				const store = getStore();
				const { domain } = store;
				let data = JSON.parse(sessionStorage.getItem("currentUser"));
				const res = await fetch(domain + `/api/professional/${id}`, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer ' + data.access_token,
					}
				})
				const info = await res.json();
				console.log(info)
				if (info.professional) {
					setStore({
						professional: info.professional
					})
				}				
			}
	};
};

export default getState;