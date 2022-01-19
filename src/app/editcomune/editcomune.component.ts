import { ProvinceService } from './../services/province/province.service';
import { ComuniService } from './../services/comuni/comuni.service';
import { Comune, Provincia } from 'src/app/classes/user/user';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Province } from '../classes/province/province';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editcomune',
  templateUrl: './editcomune.component.html',
  styleUrls: ['./editcomune.component.css']
})
export class EditcomuneComponent implements OnInit {

  province:Provincia[]=[]
  comune:Comune= new Comune
  @Output() onEditComune = new EventEmitter();
  @Input() editingComune!:Comune;
  
  constructor(private comuneservice:ComuniService, private router:Router, private provinceservice:ProvinceService) { }

  ngOnInit(): void {
    this.comune= this.editingComune
    this.provinceservice.getAllProvince().subscribe((data:any)=>{

      this.province=data.content
    })
  }

  editComune(comune:Comune): void {
    this.comuneservice.updateComune(comune).subscribe(data => {
      this.onEditComune.emit(comune)
      this.router.navigate(['comune'])
      Swal.fire("Comune modificato con successo")
      
    })
  }

}
