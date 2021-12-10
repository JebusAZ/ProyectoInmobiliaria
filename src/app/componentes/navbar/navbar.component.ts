import { Component, OnInit } from '@angular/core';
import { ApiUserService } from 'src/app/services/api-user.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public authSvc:AuthService , public api:ApiUserService) { }

  ngOnInit(): void {
   
  }
  isLogin: boolean = false;
  
  
 

}
