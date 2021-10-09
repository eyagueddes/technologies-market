import { Component, OnInit } from '@angular/core';
import { Good } from '../interfaces/good.interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
goods:Good[]=[
{name:"Pc Portable HP ",price:2000,photoUrl:"assets/PcPortable.PNG"},
{name:"Écouteurs Sans Fil",price:300,photoUrl:"assets/airbuds.PNG"},
{name:"Ecran MSI",price:300,photoUrl:"assets/ecranMSI.PNG"},
{name:"Casque Micro Gaming",price:20,photoUrl:"assets/CASQUE.PNG"}
]

  constructor() { }

  ngOnInit(): void {
  }

  addToCard(index:number){
    console.log('added',this.goods[index])

  }

}
