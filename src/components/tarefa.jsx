import { useLocalStorage } from "@uidotdev/usehooks"

export default function Tarefa({ id, nome, completa }) {
    const [lista, setLista] = useLocalStorage("lista")
        
    function check() {
        const tmpLista = lista.map((tarefa) => {
            if (tarefa.id == id) tarefa.completa = !tarefa.completa
            return tarefa
        })
        setLista(tmpLista)
    }

    function remove() {
        const tmpLista = lista.filter((tarefa) => tarefa.id != id)
        setLista(tmpLista)
    }

    return (
        <li className="flex gap-4 p-4 items-center">
            <input className="checkbox" type="checkbox" checked={completa} onChange={check} />
            <h1 className="text-xl"> {nome} </h1>
            <button className="btn btn-sm btn-error" onClick={remove}>Remover</button>
        </li>
    )
}