import { useLocalStorage } from "@uidotdev/usehooks"
import { useState } from "react"
import Tarefa from "../components/tarefa"

export default function Home() {
    const [lista, setLista] = useLocalStorage("lista", [])
    const [novaTarefa, setNovaTarefa] = useState("")

    function adicionarTarefa() {
        if (novaTarefa == "") return 
        setLista([...lista, {
            id: lista.length + 1,
            nome: novaTarefa,
            completa: false
        }])
        setNovaTarefa("")
    }

    return (
    <div className="min-h-screen p-4 flex flex-col gap-4 p-4">
        <div className="form-control mx-auto">
            <label>
                <span class="label-text">Digite uma nova tarefa</span>
            </label>
            <input
                className="input input-bordered"
                type="text" 
                value={novaTarefa}
                onChange={(e) => setNovaTarefa(e.target.value)}
            />
            <button className="btn mt-4" onClick={adicionarTarefa}>Adicionar</button>
        </div>
        <main className="grid grid-cols-2 gap-4">
            <ul className="bg-neutral p-4 rounded">
                Não concluídas:
                {lista.filter(tarefa => !tarefa.completa).map((tarefa, posicao) => (
                    <Tarefa key={posicao} id={tarefa.id} nome={tarefa.nome} completa={tarefa.completa} />
                ))}
            </ul>
            <ul className="bg-neutral p-4 rounded">
                Concluídas:
                {lista.filter(tarefa => tarefa.completa).map((tarefa, posicao) => (
                    <Tarefa key={posicao} id={tarefa.id} nome={tarefa.nome} completa={tarefa.completa} />
                ))}
            </ul>
        </main>
    </div>
)}