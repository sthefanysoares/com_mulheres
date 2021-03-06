import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//Componentes
import Card      from './Card';
import Descricao from './Descricao';

//Actions
import {changeC1} from '../../../store/sobre/action';
import {changeC2} from '../../../store/sobre/action';
import {changeC3} from '../../../store/sobre/action';

class Adm extends React.Component {
  render(){
    const {...props} = this.props;
    var styleList = (props.c1 || props.c2 || props.c3 || props.c4) ? 'fadeIn' : 'fadeOut';

    return (
      <div id="equipe-children">
        <div className="columns is-centered">
          {props.c1 === false && props.c2 === false && props.c3 === false?
            <div className="column is-1"></div>
            : null
          }
          {/*Alana*/}
          <Card image={props.image1} name={props.name1} funcao={props.funcao1}>
            <a className="is-hidden-mobile" onClick={props.changeC1}>
              {props.c1? 'Menos' : 'Ver Mais'}
              {props.c1? 
                <i className="material-icons">keyboard_arrow_left</i> :
                <i className="material-icons">keyboard_arrow_right</i>
              }
            </a>
            <a className="is-hidden-tablet" onClick={props.changeC1}>
              {props.c1? 'Menos' : 'Ver Mais'}
              {props.c1? 
                <i className="material-icons">keyboard_arrow_up</i> :
                <i className="material-icons">keyboard_arrow_down</i>
              }
            </a>
          </Card>

          { props.c1 ?
            <div className="column">
              <div className={styleList}>
                <div className="box-descricao">
                  <Descricao
                    descricao={`Graduanda em Ciência da Computação na UFS, co-fundadora do "Computação com Mulheres", entusiasta na área da Inteligência Artificial e todas as suas vertentes. Atualmente pesquiso na área de Chatbots com interdisciplinaridade na Psicologia Cognitiva e Comportamental. Na vida sou uma eterna pesquisadora do meu auto conhecimento espiritual e corporal. Danço, toco, corro, luto e medito.`}
                    linkedin="http://likedin.com/in/alanalucia"
                    instagram="https://www.instagram.com/alanaluci/"
                    facebook="https://www.facebook.com/alanalucia.souzaoliveira"
                    email="mailto:alanaluciaso@gmail.com"
                  />
                </div>
              </div>
            </div>
            : null
          }
          
          {/*Jusley*/}
          <Card image={props.image2} name={props.name2} funcao={props.funcao2}>
            <a className="is-hidden-mobile" onClick={props.changeC2}>
              {props.c2? 'Menos' : 'Ver Mais'}
              {props.c2? 
                <i className="material-icons">keyboard_arrow_left</i> :
                <i className="material-icons">keyboard_arrow_right</i>
              }
            </a>
            <a className="is-hidden-tablet" onClick={props.changeC2}>
              {props.c2? 'Menos' : 'Ver Mais'}
              {props.c2? 
                <i className="material-icons">keyboard_arrow_up</i> :
                <i className="material-icons">keyboard_arrow_down</i>
              }
            </a>
          </Card>

          { props.c2 ?
            <div className="column">
              <div className={styleList}>
                <div className="box-descricao">
                  <Descricao
                    descricao={`Estudante de Ciência da Computação na Universidade Federal de Sergipe, pesquisadora na área de processamento de imagem e computação gráfica. Atualmente estagiando como desenvolvedora Front-End. Uma das criadoras do projeto "Computação com Mulheres" (COM² Mulheres), organizer no GDG Aracaju e no projeto WTM Aracaju. Amo computação gráfica, câmera fotográfica, livros e karatê ♥.`}
                    linkedin="https://br.linkedin.com/in/jusley-arley-422637143"
                    instagram="https://www.instagram.com/jusley_a/"
                    twitter="https://twitter.com/jusley_a"
                    facebook="https://www.facebook.com/jusley.arley"
                    email="mailto:jusleyarley@gmail.com"
                  />
                </div>
              </div>
            </div>
            : null
          }
          
          {/*Sthe*/}
          <Card image={props.image3} name={props.name3} funcao={props.funcao3}>
            <a className="is-hidden-mobile" onClick={props.changeC3}>
              {props.c3? 'Menos' : 'Ver Mais'}
              {props.c3? 
                <i className="material-icons">keyboard_arrow_left</i> :
                <i className="material-icons">keyboard_arrow_right</i>
              }
            </a>
            <a className="is-hidden-tablet" onClick={props.changeC3}>
              {props.c3? 'Menos' : 'Ver Mais'}
              {props.c3? 
                <i className="material-icons">keyboard_arrow_up</i> :
                <i className="material-icons">keyboard_arrow_down</i>
              }
            </a>
          </Card>

          { props.c3 ?
            <div className="column">
              <div className={styleList}>
                <div className="box-descricao">
                  <Descricao
                    descricao={`Formada em Análise e Desenvolvimento de Sistemas; Desenvolvedora Java, C, C# e PHP; Entusiasta do Software Livre; Colaboradora do LibreOffice Brasil e dos grupos Computação com Mulheres e WoMakersCode. Trabalha com desenvolvimento de aplicativos e é apaixonada por Engenharia de Software.`}
                    linkedin="https://br.linkedin.com/in/sthefane-camilo-soares-da-silva-49237985"
                    instagram="https://www.instagram.com/sthe.soares/"
                    facebook="http://commulheres.com/sobre"
                    youtube="https://www.youtube.com/user/vidaprogramacao"
                    email="mailto:sthedeveloper@gmail.com"
                  />
                </div>
              </div>
            </div>
            : null
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({c1: state.Card.c1, c2: state.Card.c2, c3: state.Card.c3});
const mapDispatchToProps = dispatch => bindActionCreators({changeC1, changeC2, changeC3}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Adm);