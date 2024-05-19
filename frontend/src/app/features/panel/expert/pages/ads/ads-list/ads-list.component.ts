import { Component, ViewEncapsulation } from '@angular/core';
import { IAd } from '../../../interfaces/ad.interface';

@Component({
  selector: 'app-ads-list',
  templateUrl: './ads-list.component.html',
  styleUrl: './ads-list.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class AdsListComponent {
  value!: number;
  options: any = [
    { name: 'Svi', value: 0 },
    { name: 'Aktivni', value: 1 },
    { name: 'Neaktivni', value: 2 },
  ];
  ads: IAd[] = [
    {
      name: 'Konsultacije iz Web Razvoja',
      description:
        'Dobijte stručne savete o web razvoju, uključujući frontend, backend i full-stack.',
      active: true,
      price: 100,
    },
    {
      name: 'Konsultacije iz Data Science',
      description:
        'Saznajte više o analizi podataka, mašinskom učenju i AI od stručnjaka iz industrije.',
      active: true,
      price: 200,
    },
    {
      name: 'Konsultacije iz Cybersecurity',
      description:
        'Zaštitite svoj posao uz savete od stručnjaka za cybersecurity.',
      active: false,
      price: 300,
    },
  ];
  selectedProduct = null;

  onRowSelect(event: any) {}
  onRowUnselect(event: any) {}
}
