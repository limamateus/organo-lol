import "./ListaSuspensa.css"



const ListaSuspensa = (props) => {

    const onSelecionado = (evento) => {

        props.aoAlterado(evento.target.value)

    }
    return (
        <div className="listaSuspensa">
            <label>{props.label}</label>
            <select
                value={props.valor}
                required={props.required}
                onChange={onSelecionado}>
                {props.itens.map(rota => <option key={rota}>{rota} </option>)}
                <option value=""></option>
            </select>
            
        </div>

    )



}

export default ListaSuspensa