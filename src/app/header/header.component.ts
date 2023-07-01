import { Component } from '@angular/core';
import {faPhone,faSearch,faCartShopping,faHeart,faUser,faRandom} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faPhone=faPhone;
  faSearch=faSearch;
  faCartShopping=faCartShopping;
  faHeart=faHeart;
  faUser=faUser;
  faRandom=faRandom;
}
