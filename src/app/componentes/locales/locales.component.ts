import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-locales',
  templateUrl: './locales.component.html',
  styleUrls: ['./locales.component.scss']
})
export class LocalesComponent implements OnInit {

  constructor(public authSvc:AuthService) { }

  ngOnInit(): void {
  }
  isLogin: boolean = false;
}
