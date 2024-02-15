import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"

import {useState} from 'react'

const Formulario = (props) =>{
    const [nomeDoCampeao, setNomeDoCapeao] = useState('')
    const [funcaoDoCapeao, setFuncaoDoCapeao] = useState('')
    const [imagemUrl, setimagemUrl] = useState('')
    const [rota, setRota] = useState('')

  

    // A função Salvar serve para criar o card 
    const aoSalvar = (evento) =>{
        evento.preventDefault()// Essa função permite que a pagina não fica carregando completa, ou seja, somente os componente são carregados
        props.novoCampeaoAdicionado({
            nomeDoCampeao,
            funcaoDoCapeao,
            imagemUrl,
            rota
        })
    
    }


    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome do Campeao"
                    placeholder="Digite o nome do seu Campeao Ex: Ashe"
                    valor={nomeDoCampeao}
                    aoAlterado ={valor => setNomeDoCapeao(valor)}
                    />
                    <CampoTexto
                    obrigatorio={true}
                    label="Função"
                    placeholder="Digite a função do seu Campeao Ex: ATIRADOR"
                    valor={funcaoDoCapeao}
                    aoAlterado ={valor => setFuncaoDoCapeao(valor)}
                    />
                    <CampoTexto
                    obrigatorio={true}
                    label="imagem Url"
                    placeholder=".png"
                    valor={imagemUrl}
                    aoAlterado ={valor => setimagemUrl(valor)}
                    />
                    <ListaSuspensa
                     required={true} 
                     label="Rota"
                     itens ={props.rotas}
                     valor = {rota}
                     aoAlterado ={valor => setRota(valor)}
                     
                    />           
                    <Botao>
                        Criar Card    
                    </Botao>        
                
            </form>
        </section>
    )
}


export default Formulario