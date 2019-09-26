class Aluno{

 //entrada (encapsulamento via Constutor)
    constructor({nome,disciplina,nota1,nota2}){
      this.nome =nome;
      this.disciplina =disciplina;
      this.nota1 =nota1;
      this.nota2 =nota2;
    }

  //processamento
     get media(){
          return  ( (+this.nota1  +  +this.nota2)/2 );
     }


}
export default Aluno