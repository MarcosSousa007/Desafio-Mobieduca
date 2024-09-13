import axiosInstance from "../config/api";

const getAllStates = async (params) => {
	try {
		let response = await axiosInstance.get("/api/estados", params);
		return response.data
	} catch (error) {
		return error?.response?.status;
	}
};

export default { getAllStates };