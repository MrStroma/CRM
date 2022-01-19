import { IFatture } from './../interfaces/fatture/ifatture';
import { Fatture } from './../classes/fatture/fatture';
import { Component, OnInit } from '@angular/core';
import { FattureService } from '../services/fatture.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-elencofatture',
  templateUrl: './elencofatture.component.html',
  styleUrls: ['./elencofatture.component.css']
})
export class ElencofattureComponent implements OnInit {

  openEdit:boolean=false;
  selectedFattura!:Fatture;
  totalElements!: number;
  fatture:Fatture[]=[]
  size!: number;
  numberOfPages!: number
  pageNumbers: number[] = [];
  maxpages:number[]=[1,2,3,4,5,6,7,8,9,10]
  constructor(private fattureservice:FattureService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {//ottengo il parametro page dalla rotta
      
      this.fattureservice.getPagedUsers(params["page"]).subscribe((users:any) => {//passo il parametro page alla chiamata che mi restituirà gli utenti in versione paginata
       
        this.fatture = users.content

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

  

  deleteFattura(fattura:Fatture){
    this.fattureservice.deleteFattura(fattura).subscribe(data=> console.log("cancellazione fattura eseguita"))
    let index= this.fatture.indexOf(fattura)
    this.fatture.splice(index,1)
    swal.fire("Cancellazione fattura eseguita")
  }

  editFattura(fattura:Fatture){
    this.selectedFattura = fattura;
    this.openEdit = true;
  }

  closePopup(){
    this.openEdit = false;
  }

}
