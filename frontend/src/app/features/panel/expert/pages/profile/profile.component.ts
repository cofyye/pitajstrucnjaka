import { Component, ViewEncapsulation } from '@angular/core';
import { IProfileInfo } from '../../interfaces/expert.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProfileComponent {
  userInformation: IProfileInfo[] = [
    { label: 'Korisničko ime', value: 'princeps1MIA', inputVisible: false },
    { label: 'Ime', value: 'John', inputVisible: false },
    { label: 'Prezime', value: 'Doe', inputVisible: false },
  ];

  edit(index: number) {
    // Zatvaranje svih ostalih inputa
    this.userInformation.forEach((info, i) => {
      if (i !== index) {
        info.inputVisible = false;
      }
    });

    // Otvaranje ili zatvaranje inputa za odabranu labelu
    this.userInformation[index].inputVisible =
      !this.userInformation[index].inputVisible;
  }

  saveInput(index: number) {
    // Zatvaranje inputa
    this.userInformation[index].inputVisible = false;
  }
}
