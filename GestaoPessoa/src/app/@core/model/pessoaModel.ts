export class PessoaModel {
  id!: string;
  usuario!: string;
  nome!: string;
  email!: string;
  dataNasc!: any;
  ativo!: boolean;
  cep!: string;
  logradouro!: string;
  bairro!: string;
  cidade!: string;
  estado!: string;
  pais!: string;
  funcao!: any;

  constructor(data: any) {
    if (data) {
      this.id = data.id;
      this.usuario = data.usuario;
      this.nome = data.nome;
      this.email = data.email;
      this.dataNasc = data.dataNasc;
      this.ativo = data.ativo;
      this.cep = data.cep;
      this.logradouro = data.logradouro;
      this.bairro = data.bairro;
      this.cidade = data.cidade;
      this.estado = data.estado;
      this.pais = data.pais;
      this.funcao = data.funcao;
    }
  }

  setId(id: string): void {
    this.id = id;
  }

}
