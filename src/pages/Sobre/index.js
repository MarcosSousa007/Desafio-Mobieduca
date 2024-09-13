import Dificuldades from "../../components/dificuldades";
import Projeto from "../../components/projeto";
import SobreMim from "../../components/sobremim";

const Sobre = () => {
	return (
		<>
			<main>
				<div className="text-2xl font-semibold text-center w-full mt-4">
					SOBRE
				</div>
				<div className="flex">
					<SobreMim />
					<Projeto />
				</div>
				<div className="flex">
					<Dificuldades />

				</div>
			</main>
		</>
	)
}

export default Sobre;