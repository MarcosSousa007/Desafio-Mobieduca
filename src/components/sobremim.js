const SobreMim = () => {
	return (
		<>
			<main className="flex flex-col w-1/2 min-h-screen items-center gap-4 p-6">
				<div className="flex flex-col text-xl text-center">
					<span className="font-semibold">Marcos Sousa</span>
					<span>Desenvolvedor Front End Junior</span>
				</div>
				<div className="flex flex-col text-justify w-full">
					<span className="text-xl font-semibold">Sobre mim:</span>
					<div className="flex flex-col mt-2">
						<span>Sou apaixonado por tecnologia e desenvolvimento web, atualmente trilhando minha jornada como Desenvolvedor Júnior.</span>
						<span>Ao longo da minha jornada acadêmica e experiência prática, desenvolvi uma sólida compreensão das linguagens de</span>
						<span>programação como HTML, CSS, JavaScript, ReactJS e Tailwind. Estou sempre em busca de aprimorar minhas habilidades e</span>
						<span>aprender novas tecnologias para me manter atualizado com as tendências do setor.</span>
					</div>
				</div>

				<div className="flex flex-col text-justify w-full">
					<span className="text-xl font-semibold">Habilidades Técnicas:</span>
					<div className="flex flex-col mt-2">
						<span>Desenvolvimento Front-end: HTML5, CSS3, JavaScript</span>
						<span>Frameworks: ReactJS</span>
						<span>Ferramentas de Controle de Versão: Git</span>
						<span>Conhecimento básico em Back-end: Node.js</span>
					</div>
				</div>

				<div className="flex flex-col text-justify w-full">
					<span className="text-xl font-semibold">Educação:</span>
					<div className="flex flex-col mt-2">
						<span>Graduando em Análise e Desenvolvimento de Sistemas, onde venho adquirindo cada vez mais uma base sólida em</span>
						<span>princípios de programação e design web.</span>
					</div>
				</div>
			</main>
		</>
	)
}

export default SobreMim;
