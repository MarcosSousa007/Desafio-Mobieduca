import api from '../config/api';
import ValidateSession from '../utils/ValidateSession';

const createSchool = async (params) => {
	try {
		let response = await api.post('/api/escolas', params);
		return response.data;
	} catch (error) {
		ValidateSession(error?.response?.status);
		console.error('Erro ao criar escola:', error);
		return error?.response?.status;
	}
};

const getAllSchools = async () => {
	try {
		let response = await api.get('/api/escolas');
		return response.data;
	} catch (error) {
		console.error('Erro ao obter escolas:', error);
		return error?.response?.status;
	}
};

const getSchoolById = async (id) => {
	try {
		let response = await api.get(`/api/escolas/${id}`);
		return response.data;
	} catch (error) {
		console.error('Erro ao obter escola:', error);
		return error?.response?.status;
	}
};

const editSchool = async (id, params) => {
	try {
		let response = await api.patch(`/api/escolas/${id}`, params);
		return response.data;
	} catch (error) {
		console.error('Erro ao editar escola:', error);
		return error?.response?.status;
	}
};

export default { createSchool, getAllSchools, getSchoolById, editSchool };
