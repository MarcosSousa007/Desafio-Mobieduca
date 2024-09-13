import React, { useState, useEffect } from 'react';
import SchoolServices from '../../services/School.services';
import ValidateSession from '../../utils/ValidateSession';
import { Link, useNavigate } from 'react-router-dom';

const Escolas = () => {
	const navigate = useNavigate();
	const [searchTerm, setSearchTerm] = useState('');
	const [cityFilter, setCityFilter] = useState('');
	const [schoolsData, setSchoolsData] = useState([]);
	const [filteredSchools, setFilteredSchools] = useState([]);

	useEffect(() => {
		const sessionIsValid = ValidateSession();
		if (!sessionIsValid) {
			navigate('/login');
		}
	}, [navigate]);

	useEffect(() => {
		const fetchSchools = async () => {
			try {
				const response = await SchoolServices.getAllSchools();
				if (response && response.data && Array.isArray(response.data.data)) {
					// Garante que `response.data.data` seja um array antes de usá-lo
					const data = response.data.data;
					if (data.length === 0) {
						console.log('Nenhuma escola disponível no momento.');
					}
					setSchoolsData(data);
					setFilteredSchools(data);
				} else {
					console.error('Formato de resposta inesperado:', response);
					setSchoolsData([]); 
					setFilteredSchools([]);
				}
			} catch (error) {
				console.error('Erro ao buscar escolas:', error);
				setSchoolsData([]); 
				setFilteredSchools([]);
			}
		};

		fetchSchools();
	}, []);

	useEffect(() => {
		let filtered = schoolsData || []; // Garante que seja um array

		if (searchTerm) {
			filtered = filtered.filter((school) =>
				school.nome.toLowerCase().includes(searchTerm.toLowerCase())
			);
		}

		if (cityFilter) {
			filtered = filtered.filter((school) => school.cidade?.descricao === cityFilter);
		}

		setFilteredSchools(filtered);
	}, [searchTerm, cityFilter, schoolsData]);

	return (
		<div className="flex-1 p-6">
			<h1 className="text-3xl font-bold text-center mb-6">Lista de Escolas</h1>

			<div className="flex flex-col md:flex-row gap-4 mb-6">
				<input
					type="text"
					placeholder="Pesquisar por nome da escola..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className="w-full md:w-1/2 p-2 border border-gray-300 rounded-lg"
					aria-label="Pesquisar por nome da escola"
				/>

				<select
					value={cityFilter}
					onChange={(e) => setCityFilter(e.target.value)}
					className="w-full md:w-1/2 p-2 border border-gray-300 rounded-lg"
					aria-label="Filtrar por cidade"
				>
					<option value="">Filtrar por cidade</option>
					<option value="VALENCA DO PIAUI">Valença do Piauí</option>
					<option value="São Paulo">São Paulo</option>
					<option value="Rio de Janeiro">Rio de Janeiro</option>
				</select>
				<Link to={"/newschool"}>
					<button
						className="w-full md:w-auto p-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors"
					>
						Nova Escola
					</button>
				</Link>
			</div>

			<div className="bg-white p-4 rounded-lg shadow-md">
				{filteredSchools.length > 0 ? (
					<table className="min-w-full table-auto">
						<thead className="bg-gray-100">
							<tr>
								<th className="text-left px-4 py-2">Nome da Escola</th>
								<th className="text-left px-4 py-2">Cidade</th>
							</tr>
						</thead>
						<tbody>
							{filteredSchools.map((school) => (
								<tr key={school.id} className="border-b">
									<td className="px-4 py-2">{school.nome}</td>
									<td className="px-4 py-2">{school.cidade?.descricao || 'N/A'}</td>
								</tr>
							))}
						</tbody>
					</table>
				) : (
					<p className="text-center py-4">Nenhuma escola encontrada.</p>
				)}
			</div>
		</div>
	);
};

export default Escolas;
