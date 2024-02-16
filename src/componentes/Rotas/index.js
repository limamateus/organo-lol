import Campeao from "../Campeao"
import "./Rotas.css"


const Rotas = (props) =>{
    
    const corDeFundo = {backgroundColor: props.corSecundaria}
    const corPrimaria = {borderColor: props.corPrimaria}
    
    
    if(props.campeoes.length === 0){
        return null
    }else{
        return(
            <section  className='rota' style={corDeFundo}>
                <h3 style={corPrimaria} >{props.nome}</h3>
                <div className='campeos'>
                    {props.campeoes.map(campeao => <Campeao key={campeao.nomeDoCampeao} nomeDoCampeao={campeao.nomeDoCampeao} funcaoDoCampeao={campeao.funcaoDoCapeao} imageUrl={campeao.imagemUrl} corPrimaria={props.corPrimaria}/>)}
                </div>
            </section>

        )
    }
    
}


export default Rotas