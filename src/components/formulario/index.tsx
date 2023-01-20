import React from "react"
import { ITarefa } from "../../types/tarefa"
import Button from "../Button"
import style from "./formulario.module.scss"
import { v4 as uuidv4 } from "uuid"

interface Props {
	setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Formulario({ setTarefas }: Props) {
	const [tarefa, setTarefa] = React.useState("")
	const [tempo, setTempo] = React.useState("00:00")

	function adicionarTarefa(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		setTarefas((tarefasAntigas) => [
			...tarefasAntigas,
			{ tarefa, tempo, selecionado: false, completado: false, id: uuidv4() },
		])
		setTarefa("")
		setTempo("00:00")
	}

	return (
		<form className={style.novaTarefa} onSubmit={adicionarTarefa}>
			<div className={style.inputContainer}>
				<label htmlFor="tarefa">Adicione um novo estudo</label>
				<input
					type="text"
					name="tarefa"
					id="tarefa"
					value={tarefa}
					onChange={(e) => {
						setTarefa(e.target.value)
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
					value={tempo}
					onChange={(e) => {
						setTempo(e.target.value)
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

export default Formulario
