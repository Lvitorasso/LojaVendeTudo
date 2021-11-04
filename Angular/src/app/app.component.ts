import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  constructor(private router: Router,     
    private route: ActivatedRoute,
    private authService: AuthService,){
      
    // if(this.authService.estaLogado()){
    //   let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
    //   this.router.navigate([returnUrl || '/']);
    // }

  }
}
