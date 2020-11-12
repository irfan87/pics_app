import axios from "axios";

// setup the custom url
export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization: "Client-ID 7xeNcl6t_05mtQ2kXE7CVtnOrDrU1DRllYtuQDtuhUk",
	},
});
