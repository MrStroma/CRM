import { Fatture } from './../classes/fatture/fatture';
import { FattureService } from './../services/fatture.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-editfatture',
  templateUrl: './editfatture.component.html',
  styleUrls: ['./editfatture.component.css']
})
export class EditfattureComponent implements OnInit {

  @Output() onEditFattura = new EventEmitter();
  @Input() editingFattura!:Fatture;
  fattura: Fatture = new Fatture
  selectStato= [{id:1, nome:"PAGATO"},{id:2, nome:"NON PAGATO"}]
  constructor(private fattureservice:FattureService, private router:Router) { }

  ngOnInit(): void {
    this.fattura = this.editingFattura

    this.fattureservice.getAll().subscribe((data:any)=>{

      console.log("ciaone")
    })
  }

  editFattura(fattura:Fatture): void {
    this.fattureservice.updateFattura(fattura).subscribe(data => {
      this.onEditFattura.emit(fattura)
      this.router.navigate(['fatture'])
      Swal.fire("Fattura modificata con successo")
     
      
      
    })
  }

}
