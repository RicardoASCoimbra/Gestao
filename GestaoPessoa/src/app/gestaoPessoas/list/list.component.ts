import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertsService } from '../../@core/service/alerts.service';
import { PessoaService } from '../../@core/service/pessoa.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  rowData!: any[];
  loading: boolean = true;

  constructor(
    private router: Router,
    private alerts: AlertsService,
    private pessoaService: PessoaService
  ) { }

  ngOnInit(): void {
    this.carregarPessoas();
  }

  carregarPessoas() {
    this.pessoaService.getAll()
      .subscribe((res) => {
        console.log(res)
        if (res) {
          this.rowData = res;
          console.log(this.rowData)
          this.loading = false;
        } else
          this.alerts.error('Erro na Busca');
      });
  }


  excluir(id: string) {
    this.alerts.question('Deseja Excluir esse cadastro?').then((res) => {
      if (res.value) {
        this.pessoaService.Remover(id).subscribe((res) => {
            this.alerts.success('Exclusão efetuada com sucesso');
        });
        setTimeout(() => {
          window.location.reload();
          this.carregarPessoas();
        }, 15);

      } else {
        this.alerts.warning('Operação cancelada');
      }
    });
  }

  cadastrar(): void {
    this.router.navigate(['/criar'], {
      skipLocationChange: false,
    });
  }

  editar(id: string) {
    this.router.navigate(['/editar/' + id], {
      skipLocationChange: false,
    });
  }

}
