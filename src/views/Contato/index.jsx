import React from 'react';
import {Button} from 'bloomer';
import axios from 'axios';

//Imagem
import xicara from './image/xicara.png';

//CSS
import './css/contato.css';

class Contato extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name: '', email: '', subject: '', message: '',
      answer: '',
    }
  }

  handleFormChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  handleSubmit = (e) => {
    e.preventDefault();

    axios.post("", {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message
    })
    .then((response) => {
      if(!response.data.error) this.setState({answer: ["Sua mensagem foi enviada com sucesso!"]});
      else this.setState({answer: ["Errou!2"]});
      //console.log(response);
    })
    .catch((error) => {
      this.setState({answer: ["Errou!"]});
      //console.log(error);
    });
  }

  render(){
    return(
      <div id="contato"> 
        <div className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-8">
                <p className="titulo">Entre em contato</p>
                <div className="box-contato">
                  <form onSubmit={this.handleSubmit}>
                    <div className="field is-horizontal espaco top">
                      <div className="field-label is-normal">
                        <label className="label">Nome</label>
                      </div>
                      <div className="field-body">
                        <div className="field">
                          <p className="control">
                            <input
                              required
                              name="name"
                              className="input"
                              type="text"
                              placeholder="Nome"
                              value={this.state.name}
                              onChange={this.handleFormChange}
                            />
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="field is-horizontal espaco">
                      <div className="field-label is-normal">
                        <label className="label">E-mail</label>
                      </div>
                      <div className="field-body">
                        <div className="field">
                          <p className="control">
                            <input
                              required
                              name="email"
                              className="input"
                              type="email"
                              placeholder="E-mail"
                              value={this.state.email}
                              onChange={this.handleFormChange}
                            />
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="field is-horizontal espaco">
                      <div className="field-label is-normal">
                        <label className="label">Assunto</label>
                      </div>
                      <div className="field-body">
                        <div className="field">
                          <p className="control">
                            <input
                              required
                              name="subject"
                              className="input"
                              type="text"
                              placeholder="Assunto"
                              value={this.state.subject}
                              onChange={this.handleFormChange}
                            />
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="field is-horizontal espaco">
                      <div className="field-label is-normal">
                        <label className="label">Mensagem</label>
                      </div>
                      <div className="field-body">
                        <div className="field">
                          <p className="control">
                            <textarea
                              required
                              name="message"
                              className="textarea"
                              placeholder="Mensagem..."
                              value={this.state.textarea}
                              onChange={this.handleFormChange}>
                            </textarea>
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="answer">{this.state.answer}</p>
                    <div className="field">
                      <div className="control">
                        <div className="button-espaco"><Button type="submit">Enviar</Button></div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <br/>
            <div className="columns">
              <div className="column is-2"></div>
              <div className="column box-posicao" align="right">
                <div className="box-texto">
                  <p className="texto">
                    Oi, tudo bem? Quer conversar ou fazer parceria com a gente? Nós do <strong>COM² Mulheres</strong> vamos adorar ler seu e-mail. É só preencher o formulário que entraremos em contato em breve.
                    <br/>
                    Ou se preferir, você pode nos encontrar no <strong><a href="https://www.instagram.com/com.mulheres/">Instagram</a></strong>, <strong><a href="https://www.facebook.com/com2mulheres/">Facebook</a></strong> ou no e-mail: <strong><a href="">com.mulheres@gmail.com</a></strong>.
                  </p>
                </div>
              </div>
              <div className="column is-2 imagem">
                <img src={xicara} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contato;