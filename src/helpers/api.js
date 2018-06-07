let axios = require("axios");

const serverApi = "https://api.github.com/users?since=";

const getUsers = function (since, cbSuccess, cbError) {
	return axios.get(`${serverApi}${since}`).then(res => {
		cbSuccess(res.data);
	}).catch(function (error) {
		cbError(error);
	});
};

const api = {
	getUsers: getUsers
};

export default api;