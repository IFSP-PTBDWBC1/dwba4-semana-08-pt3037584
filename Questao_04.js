class Aluno {
    #primeiroNome;
    #segundoNome;
    #primeiroNota;
    #segundaNota;

    constructor(primeiroNome, segundoNome, primeiroNota, segundaNota) {
        this.#primeiroNome = primeiroNome;
        this.#segundoNome = segundoNome;
        this.#primeiroNota = primeiroNota;
        this.#segundaNota = segundaNota;
    }

    nomeCompleto() {
        return this.#primeiroNome + " " + this.#segundoNome;
    }

    media() {
        return(this.#primeiroNota * 0.6) + (this.#segundaNota * 0.4);
    }

    situacao() {
        if(this.media() >= 6){
            return "Aprovado";
        }
        else if(this.media() < 6) {
            return "Reprovado";
        }
    }
}


//------------------------------------------

const alunos = [
  new Aluno("Jonas", "Neto", 4, 5.6),
  new Aluno("Maria", "Oliveira", 9, 7.0),
  new Aluno("Pedro", "Almeida", 5, 7.2),
  new Aluno("Carlos", "Pereira", 6, 9.5),
  new Aluno("Ana", "Souza", 8, 6.5)
];

alunos.forEach(aluno => {
    alert(`Nome completo: ${aluno.nomeCompleto()}\nMédia: ${aluno.media()}\nSituação: ${aluno.situacao()}`) 
});
