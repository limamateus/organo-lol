import "./CampoTexto.css"
import Input from '@mui/joy/Input';

const CampoTexto = (props) =>{
    const aoDigitado= (evento) =>{     
           {/* Esta função serve para escultar o que esta sendo digitado e guarda o ultimo valor */}
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className="campo-texto">
            {/* Esta a label irá vim de acordo que for passado na props */}
            <label>{props.label}</label>
             {/* Este input irá receber o valor que irá vim da props que ira modificado ao digitar e vai ter um campo obrigatorio, e o descrição do placeholder irá da props */}
            <Input            
             placeholder={props.placeholder}   
             value={props.valor} 
             onChange={aoDigitado}
             required={props.obrigatorio}/>
        </div>
    )
}

export default CampoTexto;