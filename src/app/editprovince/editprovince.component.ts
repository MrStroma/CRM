import { ProvinceService } from './../services/province/province.service';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Province } from '../classes/province/province';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editprovince',
  templateUrl: './editprovince.component.html',
  styleUrls: ['./editprovince.component.css']
})
export class EditprovinceComponent implements OnInit {

  @Output() onEditProvincia= new EventEmitter();
  @Input() editingProvincia!:Province;
  provincia:Province= new Province
  constructor(private provinceservice:ProvinceService, private router:Router) { }

  ngOnInit(): void {
    this.provincia= this.editingProvincia
  }

  editProvincia(provincia:Province) {
    this.provinceservice.editProvincia(provincia).subscribe(data=>{
      this.onEditProvincia.emit(provincia)
      this.router.navigate(['province'])
      Swal.fire("Provincia Aggiornata")

    })
   
  }
}
