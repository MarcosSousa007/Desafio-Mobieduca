import React from 'react';
import { useForm } from 'react-hook-form';
import SchoolServices from '../../services/School.services';
import { useNavigate } from 'react-router-dom';

const cidades = [
  { id: 1, nome: 'São Paulo' },
  { id: 2, nome: 'Rio de Janeiro' },
  { id: 3, nome: 'Brasília' },
  { id: 4, nome: 'Salvador' },
  { id: 5, nome: 'Teresina' }
];

const NovaEscola = ({ refreshSchools }) => {
  const { register, handleSubmit, reset, watch } = useForm();
  const navigate = useNavigate();

  const selectedTurnos = watch('turnos', []);

  const onSubmit = async (data) => {
    try {
      const cidadeSelecionada = cidades.find(c => c.nome === data.cidade);
      if (cidadeSelecionada) {
        data.cidade_id = cidadeSelecionada.id;
      }
      delete data.cidade; 

      data.turnos = Array.isArray(selectedTurnos) ? selectedTurnos : [selectedTurnos];
      data.localizacao = data.local; 
      delete data.local; 

      const schoolData = {
        nome: data.nome,
        cidade_id: 1,
        localizacao: data.localizacao,
        turnos: data.turnos,
        diretor: data.diretor || '' 
      };

      await SchoolServices.createSchool(schoolData);
      reset();
      if (refreshSchools) {
        refreshSchools();
      }
      navigate('/schools');
    } catch (error) {
      console.error('Erro ao criar escola:', error);
    }
  };

  return (
    <>
      <main className="flex flex-col md:flex-row w-full min-h-screen bg-[#F9FAFD] items-center justify-center gap-6 p-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full h-full flex items-center justify-center md:w-[40%] lg:w-[30%] px-4"
        >
          <div className="w-full">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-semibold">Cadastro de uma nova escola</h1>
              <span className="text-base">
                Insira os dados necessários para inserir uma nova escola no sistema
              </span>
            </div>

            <div className="flex flex-col w-full mb-4">
              <label className="font-semibold">Nome da escola</label>
              <input
                {...register('nome', { required: true })}
                className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
                placeholder="CETI Solange Viana"
              />
            </div>

            <div className="flex flex-col w-full mb-4">
              <label className="font-semibold">
                Nome do Diretor <span className="text-slate-500">(opcional)</span>
              </label>
              <input
                {...register('diretor')}
                className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
                type="text"
                placeholder="Nome do Diretor"
              />
            </div>

            <div className="flex flex-col w-full mb-4">
              <label className="font-semibold">Cidade</label>
              <select {...register('cidade', { required: true })} className="mt-2 w-full p-2 border border-gray-300 rounded-lg">
                <option value="">Selecione a cidade</option>
                {cidades.map(cidade => (
                  <option key={cidade.id} value={cidade.nome}>{cidade.nome}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col w-full mb-4">
              <label className="font-semibold">Localização da escola:</label>
              <div className="flex items-center mt-2">
                <input
                  {...register('local', { required: true })}
                  className="mr-2"
                  type="radio"
                  value="1"
                />
                <span>Urbano</span>
              </div>
              <div className="flex items-center mt-2">
                <input
                  {...register('local', { required: true })}
                  className="mr-2"
                  type="radio"
                  value="2"
                />
                <span>Rural</span>
              </div>
            </div>

            <div className="flex flex-col w-full mb-4">
              <label className="font-semibold">Turnos:</label>
              <div className="flex items-center mt-2">
                <input
                  {...register('turnos')}
                  className="mr-2"
                  type="checkbox"
                  value="M"
                />
                <span>Manhã</span>
              </div>
              <div className="flex items-center mt-2">
                <input
                  {...register('turnos')}
                  className="mr-2"
                  type="checkbox"
                  value="T"
                />
                <span>Tarde</span>
              </div>
              <div className="flex items-center mt-2">
                <input
                  {...register('turnos')}
                  className="mr-2"
                  type="checkbox"
                  value="N"
                />
                <span>Noite</span>
              </div>
              <div className="flex items-center mt-2">
                <input
                  {...register('turnos')}
                  className="mr-2"
                  type="checkbox"
                  value="I"
                />
                <span>Integral</span>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="w-full md:w-1/2 lg:w-1/3 bg-[#00458C] text-white py-2 px-4 rounded-lg font-semibold"
              >
                Concluir Cadastro
              </button>
            </div>
          </div>
        </form>
      </main>
    </>
  );
};

export default NovaEscola;
