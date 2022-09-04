import React, { Component } from "react";
import "./estilo.css";
import DeletePNG from "../../assets/img/x-button.png";

class CardNota extends Component {
  
  deletar(){
    const indice = this.props.indice;
    this.props.deletarNota(indice);
  }

  render() {

    return (
      <div className="card-nota__box1">
        <section className="card-nota">
            <header className="card-nota_cabecalho">
              <h3 className="card-nota_titulo">{this.props.titulo}</h3>
              <img src={DeletePNG} alt="Icone lixeira" onClick={this.deletar.bind(this)} />
            </header>
            <p className="card-nota_texto">{this.props.texto}</p>
        </section>
      </div>
    );
  }
}

export default CardNota;
