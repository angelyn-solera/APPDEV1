import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
Date = new Date().getFullYear();
Author= 'angelyn solera';
Major=" Bachelor o=of science in computer science";
School = " University of Baguio";

}
