import Cronometro from "../components/Cronometro"
import Formulario from "../components/formulario"
import Lista from "../components/Lista"
import style from "./App.module.scss"

function App() {
	return (
		<div className={style.AppStyle}>
			<Formulario />
			<Lista />
			<Cronometro />
		</div>
	)
}

export default App
