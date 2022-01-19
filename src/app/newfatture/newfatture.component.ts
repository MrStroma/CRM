
import { UserService } from './../services/user/user.service';

import { IFatture} from './../interfaces/fatture/ifatture';
import { Fatture} from './../classes/fatture/fatture';
import { Component, OnInit } from '@angular/core';
import { FattureService } from '../services/fatture.service';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { User } from '../classes/user/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-newfatture',
  templateUrl: './newfatture.component.html',
  styleUrls: ['./newfatture.component.css']
})
export class NewfattureComponent implements OnInit {

  selectStato=[{id:1, nome:"PAGATO"}, {id:2, nome:"NON PAGATO"}]
  fattura: Fatture = new Fatture
  cliente:User= new User
  clienti:User[]= []
  totalElements!: number;
  size!: number;
  numberOfPages!: number;
  pageNumbers: number[] = [];
  constructor(private fattureservice:FattureService, private router:Router, private userservice:UserService,
    private route:ActivatedRoute) { }
  ngOnInit(): void {   


      
      this.route.params.subscribe(params => {//ottengo il parametro page dalla rotta
      this.userservice.getAll(params["page"]).subscribe((users:any) => {//passo il parametro page alla chiamata che mi restituirà gli utenti in versione paginata
        
        this.clienti = users.content
        console.log(this.clienti)
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

  addFattura(fattura:Fatture){

    if(fattura.anno == null){
      Swal.fire("Non lasciare spazi vuoti!")

    } else {
      this.fattureservice.createFattura(fattura).subscribe(data=> Swal.fire("Fattura creata con successo!"))
      this.router.navigate(['fatture'])
    }
    


  }
}
