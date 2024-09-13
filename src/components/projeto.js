const Projeto = () => {
	return (
		<>
			<main className="flex flex-col w-1/2 min-h-screen items-center gap-4 p-6">
				<div className="flex flex-col text-xl text-center">
					<span className="font-semibold">Projeto</span>
					<span>Tecnologias e Elementos utilizadas para na construção desse projeto</span>
				</div>
				<div className="flex flex-col text-justify w-full">
					<span className="text-xl font-semibold">ReactJS</span>
					<div className="flex flex-col mt-2">
						<span>- O projeto é baseado em React, uma biblioteca JavaScript para a construção de interfaces de usuário (UI).</span>
						<span>Ao longo da minha jornada acadêmica e experiência prática, desenvolvi uma sólida compreensão das linguagens de</span>
						<span>programação como HTML, CSS, JavaScript, ReactJS e Tailwind. Estou sempre em busca de aprimorar minhas habilidades e</span>
						<span>aprender novas tecnologias para me manter atualizado com as tendências do setor.</span>
					</div>
				</div>

				<div className="flex flex-col text-justify w-full">
					<span className="text-xl font-semibold">Axios</span>
					<div className="flex flex-col mt-2">
						<span>- Biblioteca para realizar requisições HTTP e se comunicar com a API.</span>
					</div>
				</div>

				<div className="flex flex-col text-justify w-full">
					<span className="text-xl font-semibold">Cookies</span>
					<div className="flex flex-col mt-2">
						<span>- Utilizado para armazenar e recuperar o token de autenticação.</span>
					</div>
				</div>

				<div className="flex flex-col text-justify w-full">
					<span className="text-xl font-semibold">React Hooks</span>
					<div className="flex flex-col mt-2">
						<span>- Hooks como useState, useEffect, e useForm para gerenciar estado e controlar os formulários.</span>
					</div>
				</div>

				<div className="flex flex-col text-justify w-full">
					<span className="text-xl font-semibold">React Hook Form</span>
					<div className="flex flex-col mt-2">
						<span>- Biblioteca usada para lidar com formulários de maneira eficiente.</span>
					</div>
				</div>

				<div className="flex flex-col text-justify w-full">
					<span className="text-xl font-semibold">React Router</span>
					<div className="flex flex-col mt-2">
						<span>- React Router é a biblioteca usada para implementar rotas em uma aplicação React. Ele permite que você crie uma interface de navegação e defina as diferentes páginas/componentes que serão exibidos de acordo com a URL acessada.</span>
					</div>
				</div>

				<div className="flex flex-col text-justify w-full">
					<span className="text-xl font-semibold">TailwindCSS</span>
					<div className="flex flex-col mt-2">
						<span>- Tailwind CSS está sendo utilizado para estilização. É um framework CSS utilitário que permite aplicar classes diretamente aos elementos HTML para controlar a aparência e o layout.</span>
						<span>- Exemplos de classes Tailwind no código: flex, w-full, min-h-screen, bg-[#F9FAFD], text-xl, font-semibold, gap-6, mt-2.</span>
					</div>
				</div>

				<div className="flex flex-col text-justify w-full">
					<span className="text-xl font-semibold">Flexbox</span>
					<div className="flex flex-col mt-2">
						<span>- Utiliza o Flexbox para o layout de elementos, o que facilita a criação de layouts responsivos.</span>
						<span>- Classes Tailwind relacionadas ao Flexbox: flex, flex-col, items-center, justify-center.</span>
					</div>
				</div>

				<div className="flex flex-col text-justify w-full">
					<span className="text-xl font-semibold">Estrutura de Componentes</span>
					<div className="flex flex-col mt-2">
						<span>- A aplicação está estruturada com componentes reutilizáveis no React, como os componentes SobreMim, Dificildades, Projeto, Sugestoes que isola o conteúdo de "sobre mim" do restante da aplicação.</span>
					</div>
				</div>

			</main>
		</>
	)
}

export default Projeto;
