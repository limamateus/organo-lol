import "./Campeao.css"


const Campeao = ({nomeDoCampeao,funcaoDoCampeao,imageUrl,corPrimaria}) =>{
    debugger
    return(
        <div className='campeao'>
            <div className='cabecalho'style={{backgroundColor:corPrimaria}}>
                <img src={imageUrl} alt={nomeDoCampeao}/>
            </div>
            <div className='rodape'>
                <h4>{nomeDoCampeao}</h4>
                <h5>{funcaoDoCampeao}</h5>
            </div>
        </div>
    )
}


export default Campeao