import { useState } from "react"
import Item from "./Item"
import style from "./lista.module.scss"

function Lista() {
	const [tarefas, setTarefas] = useState([
		{
			tarefa: "React",
			tempo: "02:00:00",
		},
		{
			tarefa: "Javascript",
			tempo: "01:00:00",
		},
		{
			tarefa: "Typescript",
			tempo: "01:00:00",
		},
	])

	return (
		<aside className={style.listaTarefas}>
			<h2
				onClick={() => {
					setTarefas([
						...tarefas,
						{
							tarefa: "Estudar estado",
							tempo: "05:00:00",
						},
					])
				}}
			>
				Estudos do Dia
			</h2>
			<ul>
				{tarefas.map((item, i) => (
					<Item key={i} {...item} />
				))}
			</ul>
		</aside>
	)
}

export default Lista
