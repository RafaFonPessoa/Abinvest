import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {
  preFixado: boolean = false;
    posFixado: boolean = false;
    ipcamais: boolean = false;
    tesouroSelic: boolean = false;

    tipoInvestimentoSelecionado(event: Event) {
      const target = event.target as HTMLSelectElement;
      const opcao = target.value;
      if (opcao === 'tesouro-direto') {
          this.tesouroSelic = true;
      } else {
          this.tesouroSelic = false;
      }
  }
  

  tipoRendimentoSelecionado(event: Event) {
    const target = event.target as HTMLSelectElement;
    const opcao = target.value;
    this.preFixado = false;
    this.posFixado = false;
    this.ipcamais = false;
    this.tesouroSelic = false;

    switch (opcao) {
        case 'pre':
            this.preFixado = true;
            break;
        case 'pos':
            this.posFixado = true;
            break;
        case 'ipcamais':
            this.ipcamais = true;
            break;
        case 'tesouroSelic':
            this.tesouroSelic = true;
            break;
    }
}

}

