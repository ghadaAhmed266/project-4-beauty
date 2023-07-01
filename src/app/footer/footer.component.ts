import { Component } from '@angular/core';
import {faFacebookF,faGoogle,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons';
//import {fa} from '@fortawesome/free-regular-svg-icons';
import {faPhone,faEnvelope,faFax,faMapMarker,faCopyright} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  faFacebook=faFacebookF;
  faGooglePlus=faGoogle;
  faInstagram=faInstagram;
  faTwitter=faTwitter;
  faPhone=faPhone;
  faEnvelope=faEnvelope;
  faFax=faFax;
  faMapMarker=faMapMarker;
  faCopyright=faCopyright;
}
