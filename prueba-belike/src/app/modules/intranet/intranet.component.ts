import { Component, OnInit,Input } from '@angular/core';
import { RegistrationComponent } from '../registration/registration.component';

@Component({
  selector: 'app-intranet',
  templateUrl: './intranet.component.html',
  styleUrls: ['./intranet.component.css']
})
export class IntranetComponent implements OnInit {

  //@Input() childItem = '';
  @Input() username: string | undefined;
  @Input() Registration: RegistrationComponent | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
