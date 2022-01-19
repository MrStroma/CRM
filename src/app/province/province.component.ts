import { Provincia } from './../classes/user/user';
import { Province } from './../classes/province/province';
import { ActivatedRoute, Router } from '@angular/router';
import { ProvinceService } from './../services/province/province.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.css']
})
export class ProvinceComponent implements OnInit {

  selectedProvincia!:Province;
  openEdit:boolean = false;
  province:Province[]=[]
  totalElements!: number;
  size!: number;
  numberOfPages!: number;
  pageNumbers: number[] = [];
  constructor(private provinceservice:ProvinceService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {//ottengo il parametro page dalla rotta
      
      this.provinceservice.getPagedUsers(params["page"]).subscribe((users:any) => {//passo il parametro page alla chiamata che mi restituirà gli utenti in versione paginata
       
        this.province = users.content

        /**inizio paginazione */
        this.totalElements = users.totalElements
        this.size = users.size
        this.numberOfPages = Math.round(users.totalElements / users.size)


        for(let i = 1; i <= this.numberOfPages; i++){
          console.log(i);
          this.pageNumbers.push(i);
        }

        /**fine paginazione */
      });

    })
  }


  deleteProvincia(provincia:Provincia)  {
    this.provinceservice.deleteProvincia(provincia).subscribe(data=>Swal.fire("Cancellazione Eseguita"))
    let index= this.province.indexOf(provincia)
    this.province.splice(index,1)
  }



  editProvincia(provincia:Province){
    this.selectedProvincia = provincia;
    this.openEdit = true;
}

closePopup(){
  this.openEdit = false;
}

}
