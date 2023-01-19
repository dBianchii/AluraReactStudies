import React from "react"
import { ITarefa } from "../../types/tarefa"
import Button from "../Button"
import style from "./formulario.module.scss"
import { v4 as uuidv4 } from "uuid"
// This is an example of a class component. It is an old way of writing components.
// It is still used, but it is not recommended to use it anymore.
// The new way of writing components is using functions.

class Formulario extends React.Component<{
	setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {
	state = {
		tarefa: "",
		tempo: "00:00:00",
	}

	adicionarTarefa(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		this.props.setTarefas((tarefasAntigas) => [
			...tarefasAntigas,
			{ ...this.state, selecionado: false, completado: false, id: uuidv4() },
		])
		this.setState({ tarefa: "", tempo: "00:00:00" })
	}

	render() {
		return (
			<form
				className={style.novaTarefa}
				onSubmit={this.adicionarTarefa.bind(this)}
			>
				<div className={style.inputContainer}>
					<label htmlFor="tarefa">Adicione um novo estudo</label>
					<input
						type="text"
						name="tarefa"
						id="tarefa"
						value={this.state.tarefa}
						onChange={(e) => {
							this.setState({ ...this.state, tarefa: e.target.value })
						}}
						placeholder="O que você quer estudar?"
					/>
				</div>
				<div className={style.inputContainer}>
					<label htmlFor="tempo">Tempo</label>
					<input
						type="time"
						step="1"
						name="tempo"
						value={this.state.tempo}
						onChange={(e) => {
							this.setState({ ...this.state, tempo: e.target.value })
						}}
						id="tempo"
						min="00:00:00"
						max="01:30:00"
					/>
				</div>
				<Button type="submit">Button</Button>
			</form>
		)
	}
}
export default Formulario
