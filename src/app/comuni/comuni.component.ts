import { Comune } from './../classes/user/user';
import { ActivatedRoute, Router } from '@angular/router';
import { ComuniService } from './../services/comuni/comuni.service';
import { Component, OnInit } from '@angular/core';
import { IComune } from '../interfaces/user/i-user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comuni',
  templateUrl: './comuni.component.html',
  styleUrls: ['./comuni.component.css']
})
export class ComuniComponent implements OnInit {

  openEdit:boolean= false
  selectedComune!:Comune
  comuni:IComune[]=[]
  totalElements!: number;
  size!: number;
  numberOfPages!: number;
  pageNumbers: number[] = [];
  constructor(private comuniservice:ComuniService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {//ottengo il parametro page dalla rotta
      
      this.comuniservice.getPagedUsers(params["page"]).subscribe((users:any) => {//passo il parametro page alla chiamata che mi restituirà gli utenti in versione paginata
       
        this.comuni = users.content

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

  deleteComune(comune:Comune){
    console.log(comune)
    this.comuniservice.deleteComune(comune).subscribe(data=>{
      let index = this.comuni.indexOf(comune)
      
      this.comuni.splice(index,1)
      Swal.fire("cancellazione eseguita")
      

    })
  }


    editComune(comune:Comune){
        this.selectedComune = comune;
        this.openEdit = true;
    }

    closePopup(){
      this.openEdit = false;
      } 
}
