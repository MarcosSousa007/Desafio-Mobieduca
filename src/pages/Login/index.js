import { useState } from "react";
import { useForm } from "react-hook-form";
import AuthServices from "../../services/Auth.services";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const Login = () => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const [loginError, setLoginError] = useState('');
	const navigate = useNavigate();
	
	const onSubmit = async (data) => {
		try {
			const response = await AuthServices.authLogin(data);
			console.log(response)

			if (response && response.token) {
				Cookies.set('authToken', response.token, { expires: 1 });
				navigate('/schools'); 
			} else {
				setLoginError('Erro ao fazer login. Verifique suas credenciais e tente novamente.');
			}
		} catch (error) {
			setLoginError('Erro ao fazer login. Verifique suas credenciais e tente novamente.');
		}
	};

	return (
		<main className="flex flex-col md:flex-row w-full min-h-screen bg-[#F9FAFD] items-center justify-center gap-6 p-6">
			<form
				className="w-full h-full flex items-center justify-center md:w-[40%] lg:w-[30%] px-4"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="w-full">
					<div className="text-center mb-6">
						<h1 className="text-3xl font-semibold">Bem-vindo!</h1>
						<span className="text-base">
							Insira seus dados para ingressar no sistema
						</span>
					</div>

					{loginError && (
						<p className="text-red-500 text-center mb-4">{loginError}</p>
					)}

					<div className="flex flex-col w-full mb-4">
						<label className="font-semibold">Insira seu usuário</label>
						<input
							className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
							placeholder="email@email.com"
							{...register("email", { required: true })}
						/>
						{errors.username && (
							<span className="text-red-500">Usuário é obrigatório</span>
						)}
					</div>

					<div className="flex flex-col w-full mb-4">
						<label className="font-semibold">Insira sua senha</label>
						<input
							className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
							type="password"
							placeholder="Senha"
							{...register("senha", { required: true })}
						/>
						{errors.password && (
							<span className="text-red-500">Senha é obrigatória</span>
						)}
					</div>

					<div className="flex justify-center mt-6">
						<button
							type="submit"
							className="w-full md:w-1/2 lg:w-1/3 bg-[#00458C] text-white py-2 px-4 rounded-lg font-semibold"
						>
							Entrar
						</button>
					</div>
				</div>
			</form>
		</main>
	);
};

export default Login;
