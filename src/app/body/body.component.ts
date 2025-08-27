import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: false,
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  colors: string[]=['#2c3e50','#e74c3c','#3498db','','','','',]
currentColorIndex: number=0
  changeNameColor(){
    this.currentColorIndex=
    (this.currentColorIndex +1) %
    this.colors.length
  }

  get currentColor(): string {
    return this.colors
    [this.currentColorIndex]
  }
profile ={
  name: 'ANGELY SOLERA',
  title:'sofware engineer',
  about: "designing",
  skills: ['angular','typescript','html/css'],
  experience:[ {role:"Web developer",
     company:'tech solution',
    period:'2022 to present ',
  description: 'developing ang maintaining web appplications using angular and related technologies '},
  {
    role: 'frontend intern',
    company:'digital creation',
    period :'2021-2022',
    description:'developing ang maintaining web appplications using angular and related technologies '

  },
   ],
   education:{
     degree: 'bachelor of dcience in computer science',
     school:'university of baguio',
     year:'2nd yr',
   },
   contact:{
     email:'angelynsoler@gmail.com',
     phone:'09291241607',
     location: ' manila, phillipines'
   }
}
}
