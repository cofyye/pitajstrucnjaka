import { Component } from '@angular/core';
import { IChatInfo } from '../../interfaces/chat-info.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css'],
})
export class ChatsComponent {
  selectedChat: string = '';
  maxWords = 4;

  chats: IChatInfo[] = [
    {
      name: 'Tommy Shelby',
      profilePicture:
        'https://primefaces.org/cdn/primeng/images/demo/avatar/walter.jpg',
      chat: 'Brate kad ce popravljamo ono sto smo pricali.',
      chatStatus: '../../../../../../assets/double-check.svg',
    },
    {
      name: 'Andjela Mia Doncov',
      profilePicture:
        'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
      chat: 'Dobar dan videla sam Vas oglas iz struktura podataka.',
      chatStatus: '../../../../../../assets/double-check.svg',
    },
    {
      name: 'Vuk Vukadinovic',
      profilePicture:
        'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png',
      chat: 'Zanima me kako bi se odvijao kurs iz Uvoda u racunarstvo koji nudite na profilu?',
      chatStatus: '../../../../../../assets/check.svg',
    },
    {
      name: 'Mateja Jovic',
      profilePicture:
        'https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png',
      chat: 'Zdravo Mateja, da li si zadovoljna listom koju sam ti poslao?',
      chatStatus: '../../../../../../assets/check.svg',
    },
    {
      name: 'Filip Lakicevic',
      profilePicture:
        'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png',
      chat: 'Zdravo Filipe, da li bismo mogli da se cujemo veceras kako bismo se dogovorili oko konsultacija sutra?',
      chatStatus: '../../../../../../assets/load-message.svg',
    },
    {
      name: 'Andjela Pavlovic',
      profilePicture:
        'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
      chat: 'Prijatno!',
      chatStatus: '../../../../../../assets/double-check.svg',
    },
    {
      name: 'Aleksa Ilic',
      profilePicture:
        'https://primefaces.org/cdn/primeng/images/demo/avatar/walter.jpg',
      chat: 'U redu, cujemo se u utorak.',
      chatStatus: '../../../../../../assets/double-check.svg',
    },
    {
      name: 'Nikola Doncov',
      profilePicture:
        'https://primefaces.org/cdn/primeng/images/demo/avatar/walter.jpg',
      chat: 'Aha, razumem, znaci moja je greska bila u kodu?',
      chatStatus: '../../../../../../assets/load-message.svg',
    },
  ];

  constructor(public readonly _route: ActivatedRoute) {}

  // Function to select a chat
  selectChat(chat: string) {
    this.selectedChat = chat;
  }

  limitText(text: string): string {
    const words = text.split(' ');
    if (words.length > this.maxWords) {
      return words.slice(0, this.maxWords).join(' ') + '...';
    }
    return text;
  }

  search(event: any) {}
}
