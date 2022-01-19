import { ProvinceService } from './../services/province/province.service';
import { Provincia } from 'src/app/classes/user/user';
import { Comune } from './../classes/user/user';
import { Component, OnInit } from '@angular/core';
import { ComuniService } from '../services/comuni/comuni.service';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-newcomuni',
  templateUrl: './newcomuni.component.html',
  styleUrls: ['./newcomuni.component.css']
})
export class NewcomuniComponent implements OnInit {

  comune:Comune = new Comune
  provincia:Provincia= new Provincia

  province:Provincia[]= []
  constructor(private comuneservice:ComuniService, private router:Router, private provinceservice:ProvinceService) { }

  ngOnInit(): void {
    this.provinceservice.getAllProvince().subscribe((data:any)=>{

      this.province=data.content
    })
      
     


  }

  addComune(comune:Comune){
    if(comune.nome == null){
      Swal.fire("Non lasciare spazi vuoti!")
    } else {
      this.comuneservice.addComune(comune).subscribe(data=> Swal.fire("Aggiunto comune con successo!"))
      this.router.navigate(["comuni"])
    }
    
  }

}
