import React from 'react';
import Aluno from './model/Aluno';

class ControleAluno extends React.Component{
     constructor(props){
         super(props);
         this.state = {
         nome : '',
         disciplina : '',
         nota1 : 0,
         nota2 : 0,
         media : 0
         }
     this.handleNome =  this.handleNome.bind(this);
     this.handleDisciplina =  this.handleDisciplina.bind(this);
     this.handleNota1 =  this.handleNota1.bind(this);
     this.handleNota2 =  this.handleNota2.bind(this);
     this.calculaMedia = this.calculaMedia.bind(this);
   }

 
    handleNome(e){
        this.setState({nome:   e.target.value});
    }
    handleDisciplina(e){
        this.setState({disciplina:  e.target.value});
    }
    handleNota1(e){
        this.setState({nota1:  e.target.value});
    }
    handleNota2(e){
        this.setState({nota2:  e.target.value});
    }

 
    calculaMedia(){
         this.aluno = new Aluno(this.state); //dados que estou encapsulando
         this.setState(
             {media : this.aluno.media}
         )

    } 

    render(){
       return(
         <form>
            <h2>Formulario de Dados</h2>
            <hr/>

         Nome<br/>
     <input type="text" name="nome" onChange={this.handleNome}
          value={this.state.nome} />
        <br/>Disciplina<br/>
    <input type="text" name="disciplina" onChange={this.handleDisciplina}
          value={this.state.disciplina} />
     <br/>Nota1<br/>
     <input type="number" name="nota1" onChange={this.handleNota1}
          value={this.state.nota1} />
     <br/>Nota2<br/>
     <input type="number" name="nota2" onChange={this.handleNota2}
          value={this.state.nota2} />
 <br/>          
     <button onClick={this.calculaMedia} type="button">Media</button> 
  <br/>
    <h3>Saída dos Dados</h3>
    <hr/>
     Nome       : {this.state.nome}<br/>
     Disciplina : {this.state.disciplina}<br/>
     Média      : {this.state.media}<br/>
           </form>
       )

    }
}
export default ControleAluno
