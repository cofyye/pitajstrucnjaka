import {
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { IProfileInfo } from '../../interfaces/profile-info.interface';
import { IPasswordInfo } from '../../interfaces/password-info.interface';
import { IProfessionInfo } from '../../interfaces/profession-info.interface';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProfileComponent {
  @ViewChild('inputFieldRef') inputFieldRef!: ElementRef;
  file: string =
    'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png';

  public valForm: FormGroup = this._fb.group({
    password: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(32),
    ]),
  });

  professionInformation: IProfessionInfo[] = [
    { label: 'Naziv', value: 'UX-Designer' },
    {
      label: 'Biografija',
      value:
        "What is Lorem Ipsum?\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];

  passwordInformation: IPasswordInfo[] = [
    { label: 'Trenutna sifra', type: false },
    { label: 'Nova sifra', type: true },
    { label: 'Potvrdite sifru', type: false },
  ];

  userInformation: IProfileInfo[] = [
    { label: 'Korisnicko ime', value: 'princeps1MIA', inputVisible: false },
    { label: 'Ime', value: 'John', inputVisible: false },
    { label: 'Prezime', value: 'Doe', inputVisible: false },
  ];

  title?: string;

  constructor(private readonly _fb: FormBuilder, private _profileService: ProfileService) { }

  edit(index: number) {
    this.userInformation.forEach((info, i) => {
      if (i !== index) {
        info.inputVisible = false;
      }
    });

    this.userInformation[index].inputVisible =
      !this.userInformation[index].inputVisible;

    if (this.userInformation[index].inputVisible) {
      setTimeout(() => {
        const inputField = this.inputFieldRef.nativeElement as HTMLInputElement;
        if (inputField) {
          inputField.focus();
        }
      });
    }
  }

  saveInput(index: number) {
    this.userInformation[index].inputVisible = false;
    if (this.userInformation[index].label === 'Ime')
      this._profileService.changeName(this.userInformation[index].value).subscribe({
        next: (response) => { },
        error: (error) => { },
      });
    else if (this.userInformation[index].label === 'Prezime')
      this._profileService.changeName(this.userInformation[index].value).subscribe((response) => {
        console.log(response);
      });
    else if (this.userInformation[index].label === 'Korisnicko ime')
      this._profileService.changeName(this.userInformation[index].value).subscribe((response) => {
        console.log(response);
      });
  }

  cancelEdit(index: number) {
    this.userInformation[index].inputVisible = false;
  }

  onFileChange(event: any) {
    const files = event.target.files as FileList;

    if (files.length > 0) {
      const _file = URL.createObjectURL(files[0]);
      this.file = _file;
      this.resetInput();
    }
  }
  resetInput() {
    const input = document.getElementById(
      'avatar-input-file'
    ) as HTMLInputElement;
    if (input) {
      input.value = '';
    }
  }
}
