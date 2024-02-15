import './Banner.css'
import imagemBanner from '../../imagens/banner.png'
import { Fragment } from 'react';

const Banner = () =>{
    return(
        <Fragment>
             <header className="banner"> 
            <img src={imagemBanner} alt='Banner'/>
            
         </header>
        </Fragment>
        
     

    )
}


export default Banner;