import { useState } from 'react';

import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rotas from './componentes/Rotas';


function App() {

  const rotas = [
    {
      nome: 'ROTA SUPERIOR',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
  },
  {
      nome: 'SELVA',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
  },
  {
      nome: 'ROTA DO MEIO',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
  },
  {
      nome: 'ROTA INFERIOR',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
  },
  {
      nome: 'SUPORTE',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
  }
  ]

  const [campeoes,setCampeoes] = useState([])

  const aoNovoCampeaoAdicionado = (campeao) =>{    
    setCampeoes([...campeoes,campeao])
  }
  return (
      <div className="App">
        <Banner/>
        <Formulario
          rotas ={rotas.map(rota => rota.nome)}
          novoCampeaoAdicionado = {campeao => aoNovoCampeaoAdicionado(campeao)}          
        />
        {rotas.map(rota => <Rotas
          key={rota.nome}
          nome={rota.nome}
          corPrimaria={rota.corPrimaria}
          corSecundaria={rota.corSecundaria}
          campeoes ={campeoes.filter(campeao => campeao.rota === rota.nome)}
          />
          
          )}
        </div>
  );
}

export default App;
