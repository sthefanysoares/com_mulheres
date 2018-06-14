import React from 'react';

//Componentes
import Adm   from './Administracao';
import Colab from './Colaboradores';

//Images
import Alana from '../../assets/image/sobre/nos/alana.jpg';
import Jusley from '../../assets/image/sobre/nos/jusley.jpg';
import Sthe from '../../assets/image/sobre/nos/sthe.jpg';
import Veronica from '../../assets/image/sobre/nos/veronica.jpg';
import Jaine from '../../assets/image/sobre/nos/jaine.jpg';
import Natalia from '../../assets/image/sobre/nos/natalia.jpg';

class Equipe extends React.Component {
  render(){
    return (
      <div id="equipe">
        <div className="container">
          <Adm
            image1={Alana} name1="Alana Lucia" funcao1="Administração"
            image2={Jusley} name2="Jusley Arley" funcao2="Administração"
            image3={Sthe} name3="Sthefane Soares" funcao3="Administração"
            image4={Veronica} name4="Verônica Nascimento" funcao4="Administração"
          />

          <Colab
            image5={Jaine} name5="Jaine Conceição" funcao5="Colaboradora"
            image6={Natalia} name6="Natália Guimarães" funcao6="Colaboradora"
          />
        </div>
      </div>
    );
  }
}

export default Equipe;