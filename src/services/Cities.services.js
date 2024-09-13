import axiosInstance from "../config/api";

const getAllCities = async (params) => {
	try {
		let response = await axiosInstance.get("/api/cidades", params);
		return response.data
	} catch (error) {
		return error?.response?.status;
	}
};

export default { getAllCities };