import Item from "./Item"
import style from "./lista.module.scss"

import { ITarefa } from "../../types/tarefa"

function Lista({ tarefas }: { tarefas: ITarefa[] }) {
	return (
		<aside className={style.listaTarefas}>
			<h2>Estudos do Dia</h2>
			<ul>
				{tarefas.map((item, i) => (
					<Item key={i} {...item} />
				))}
			</ul>
		</aside>
	)
}

export default Lista
