import { ProvinceService } from './../services/province/province.service';

import { Component, OnInit } from '@angular/core';
import { Province } from '../classes/province/province';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-newprovince',
  templateUrl: './newprovince.component.html',
  styleUrls: ['./newprovince.component.css']
})
export class NewprovinceComponent implements OnInit {

  provincia:Province = new Province

  constructor(private provinceservice:ProvinceService, private router:Router) { }

  ngOnInit(): void {
  }

  addProvincia(provincia:Province){

    if(provincia.nome == null){
      Swal.fire("Non puoi inserire campi vuoti!")
    } else {
      this.provinceservice.createProvincia(provincia).subscribe(data=> Swal.fire("provincia creata"))
      this.router.navigate(['province'])
    }
    
  }

}
