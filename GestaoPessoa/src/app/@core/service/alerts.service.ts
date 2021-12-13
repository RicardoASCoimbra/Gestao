import { Injectable } from '@angular/core';
import Swal, { SweetAlertResult } from 'sweetalert2';



@Injectable()
export class AlertsService {

  constructor() { }

  public success(mensagem: string): void {
    Swal.fire({
      title: 'Sucesso!', text: mensagem,
      icon: 'success', width: '42rem', allowOutsideClick: false, allowEscapeKey: false
    });
  }

  public error(mensagem: string): void {
    Swal.fire({
      title: 'Erro!', text: mensagem,
      icon: 'error', width: '42rem', allowOutsideClick: false, allowEscapeKey: false
    });
  }

  public warning(mensagem: string): void {
    Swal.fire({
      title: 'Alerta!', text: mensagem,
      icon: 'warning', width: '42rem', allowOutsideClick: false, allowEscapeKey: false
    });
  }

  public question(mensagem: string): Promise<SweetAlertResult> {
    return Swal.fire({
      title: 'Confirmação',
      icon: 'question',
      text: mensagem,
      allowOutsideClick: false,
      allowEscapeKey: false,
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
      confirmButtonColor: '#449d44',
      cancelButtonColor: '#d9534f',
      width: '42rem'
    })
  }

  public info(mensagem: string): void {
    Swal.fire({
      title: 'Aviso', text: mensagem,
      icon: 'info', width: '42rem', allowOutsideClick: false, allowEscapeKey: false
    });
  }

  public customMsg(titulo: string, mensagem: string): void {
    Swal.fire({
      title: titulo, text: mensagem, width: '42rem', allowOutsideClick: false, allowEscapeKey: false
    });
  }
}
