
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { localStorageService } from 'src/app/services/localStorageService';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private authService: AuthService, private localdb: localStorageService) { }

  name: any = this.localdb.get('usuario');


}
