import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaModel } from '../../@core/model/pessoaModel';
import { AlertsService } from '../../@core/service/alerts.service';
import { PessoaService } from '../../@core/service/pessoa.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  objPessoa: PessoaModel = new PessoaModel({});
  objPessoaInicial: any;
  pessoaForm!: FormGroup;
  funcaoList!: any[];
  estadosList!: any[];

  //editar
  editPage!: boolean;
  editingIndex!: number;
  editing!: boolean;
  idPessoa!: string;
  tituloPagina!: boolean;
  botaoSalvar: boolean = false;
  deleted!: boolean;
  idPessoaDeleted!: string;

  constructor(
    private fb: FormBuilder,
    private pessoaService: PessoaService,
    private alerts: AlertsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.idPessoa = this.activatedRoute.snapshot.params['id'];
    this.editPage = this.idPessoa !== undefined ? true : false;
    this.tituloPagina = this.editPage;
  }

  ngOnInit(): void {
    this.createForm();
    this.initVars();
    this.carregarFuncao();
    this.carregarEstados();
    if (this.editPage) {
      this.fillFormForEdit();
    }
  }

  initVars(): void {
    this.editingIndex = 0;
    this.editing = false;
  }

  fillFormForEdit(): void {
    this.pessoaService.getById(this.idPessoa).subscribe((res: any) => {
      if (res) {
        this.objPessoa = new PessoaModel(res);
        this.objPessoa.dataNasc = new Date(this.objPessoa.dataNasc );
        this.objPessoaInicial = new PessoaModel(this.objPessoa);
        this.editing = true;
      }
    });
  }

  public verificarBotaoSalvar() {
    if (this.objPessoaInicial) {
      if (
        JSON.stringify(this.objPessoaInicial) ===
        JSON.stringify(this.objPessoa)
      ) {
        return true;
      } else {
        return false;
      }
    }
    if (this.pessoaForm.invalid) {
      return true;
    }
  }

  carregarFuncao() {
    this.funcaoList = [
      { label: ' ', value: ' ' },
      { label: 'Colaborador ', value: '1' },
      { label: 'Gerente ', value: '2' },
      { label: 'Admintrativo ', value: '3' },
      { label: 'Presidencia ', value: '4' }
    ];
  }

  carregarEstados() {
    this.estadosList = [
      { label: ' ', value: ' ' },
      { label: 'AC', value: 'AC' },
      { label: 'AL', value: 'AL' },
      { label: 'AP', value: 'AP' },
      { label: 'AM', value: 'AM' },
      { label: 'BA', value: 'BA' },
      { label: 'CE', value: 'CE' },
      { label: 'ES', value: 'ES' },
      { label: 'GO', value: 'G0' },
      { label: 'MA', value: 'MA' },
      { label: 'MT', value: 'MT' },
      { label: 'MS', value: 'MS' },
      { label: 'MG', value: 'MG' },
      { label: 'PA', value: 'PA' },
      { label: 'PB', value: 'PB' },
      { label: 'PR', value: 'PR' },
      { label: 'PE', value: 'E' },
      { label: 'RJ', value: 'RJ' },
      { label: 'RN', value: 'RN' },
      { label: 'RS', value: 'RS' },
      { label: 'RO', value: 'RO' },
      { label: 'RR', value: 'RR' },
      { label: 'SC', value: 'SC' },
      { label: 'SP', value: 'SP' },
      { label: 'SE', value: 'SE' },
      { label: 'TO', value: 'TO' },
      { label: 'DF', value: 'DF' }
    ];
  }

  // sendToServer(): any {

  //   return new Promise<void>((resolve, reject) => {
  //     if (this.editPage == true) {
  //       this.pessoaService.update(this.objPessoa).subscribe((res) => {
  //         console.log(res.lenght)
  //         if (res) {
  //           console.log('entrou resolve')
  //           resolve();
  //         } else {
  //           console.log('entrou ewject')
  //           reject();
  //         }
  //       });
  //     } else {
  //       this.pessoaService.insert(this.objPessoa).subscribe((res) => {
  //         console.log(res.lenght)
  //         if (res ) {
  //           console.log('entrou resolve')
  //           resolve();
  //         } else {
  //           console.log('entrou ewject')
  //           reject();
  //         }
  //       });
  //     }
  //   });
  // }
  deletePessoa(id: string): any {
    this.pessoaService.Remover(id).subscribe((res) => {
      if (res) {
        this.alerts.error('Um erro ocorreu ao deletar a pastoral');
      }
    });
  }

  salvar(): void {
      this.sendToServer(this.objPessoa)
      setTimeout(() => {
        var mensagem = 'Transação efetuada com sucesso';
        this.alerts.success(mensagem);
        this.pessoaForm.reset();
      }, 1500);
  }

  salvarVoltar(): void {
    this.sendToServer(this.objPessoa)
        setTimeout(() => {
          var mensagem = 'Registro atualizado com sucesso';
          this.alerts.success(mensagem);
          this.voltar();
        }, 1500);
  }

  sendToServer(aluno: PessoaModel) {
    if (!this.editPage) {
      this.pessoaService.insert(this.objPessoa).subscribe(
        () => {}
      );
    } else {
      this.pessoaService.update(this.objPessoa).subscribe(() => {

      });
    }
  }



  voltar() {
    this.router.navigate(['./'], {
      skipLocationChange: false,
    });
  }

  createForm() {
    this.pessoaForm = this.fb.group({
      usuario: new FormControl({ value: '', disabled: false }, [Validators.required,]),
      nome: new FormControl({ value: '', disabled: false }, [Validators.required,]),
      email: new FormControl({ value: '', disabled: false }, [
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ]),
      dataNasc: new FormControl({ value: '', disabled: false }, [Validators.required,]),
      ativo: new FormControl({ value: true, disabled: false }, [Validators.required,]),
      cep: new FormControl({ value: '', disabled: false }, [Validators.required,]),
      logradouro: new FormControl({ value: '', disabled: false }),
      bairro: new FormControl({ value: '', disabled: false }),
      cidade: new FormControl({ value: '', disabled: false }),
      estado: new FormControl({ value: '', disabled: false }),
      pais: new FormControl({ value: '', disabled: false }),
      funcao: new FormControl({ value: '', disabled: false }, [Validators.required,])
    });
  }

  get usuario() { return this.pessoaForm.get('usuario'); }
  get nome() { return this.pessoaForm.get('nome'); }
  get email() { return this.pessoaForm.get('email'); }
  get dataNasc() { return this.pessoaForm.get('dataNasc'); }
  get ativo() { return this.pessoaForm.get('ativo'); }
  get cep() { return this.pessoaForm.get('cep'); }
  get logradouro() { return this.pessoaForm.get('logradouro'); }
  get bairro() { return this.pessoaForm.get('bairro'); }
  get cidade() { return this.pessoaForm.get('cidade'); }
  get estado() { return this.pessoaForm.get('estado'); }
  get pais() { return this.pessoaForm.get('pais'); }
  get funcao() { return this.pessoaForm.get('funcao'); }


}
