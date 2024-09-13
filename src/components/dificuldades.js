const Dificuldades = () => {
	return (
		<>
			<main className="flex flex-col w-1/2 min-h-screen items-center gap-4 p-6">
				<div className="flex flex-col text-xl text-center">
					<span className="font-semibold">Projeto</span>
					<span>Maiores dificuldades</span>
				</div>

				<div className="flex flex-col text-justify w-full">
					<span className="text-xl font-semibold">Consumo da API</span>
					<div className="flex flex-col mt-2">
						<span>Tive alguns problemas para o consumo da API devido a utilizar ferramentas que ainda conhecia.</span>
						<span>Precisei estudar e pesquisar bastante para concluir o projeto. Isso me agregou muito conhecimento</span>
					</div>
				</div>

				<div className="flex flex-col text-justify w-full">
					<span className="text-xl font-semibold">Desenvolver um projeto sozinho</span>
					<div className="flex flex-col mt-2">
						<span>Nesse meu tempo como desenvolvedor, nunca havia iniciado e feito um projeto do completo zero e sozinho</span>
						<span>Percebi que ainda preciso aprender muito, e através de desafios como esse que conseguimos evoluir</span>
					</div>
				</div>
			</main>
		</>
	)
}

export default Dificuldades;
