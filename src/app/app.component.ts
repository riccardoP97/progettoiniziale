import { Component } from '@angular/core';
import { User } from './Model/user';
import { UserService } from './Service/userService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Animali';

  showTigre = false;
  showIguana = false;
  showBalena = false;
  showGiaguaro = false;
  showError = false;

  research: any = "";
  numberRepetitions:any=0;
  utenti:User[] = [];
  showTextTigre=false;
  showTextBalena=false;
  showTextGiaguaro=false;
  showTextIguana=false;
  showTextError = false;

  nomeUtenteDaInserire = '';
  cognomeUtenteDaInserire = '';
  etaUtenteDaInserire = ''

  listaAnimals = ['tigre','giaguaro','iguana','balena'];
  listaDaMostrare: any[] = [];

  tigre=document.getElementById("tigre");

  constructor(private userService: UserService){
    this.userService.getUtenti().subscribe(
      (response:any) => {
        this.utenti = response;
        console.log(this.utenti[0])
      }
    )
  }

  eliminaCard(animal: string) {

    if (animal == "balena") {
      this.showBalena = false;
    }
    

    if (animal == "giaguaro") {
      this.showGiaguaro = false;
    }

    if (animal == "iguana") {
      this.showIguana = false;
    }

    if (animal == "tigre") {
      this.showTigre = false;
    }
    if(animal=="error"){
      this.showError=false;
    }
  }

  mostra(animal: string) {
    this.listaDaMostrare = [''];

    this.showTigre = false;
    this.showBalena = false;
    this.showGiaguaro = false;
    this.showIguana = false;
    this.showTextError = false;

    for(let i=0;i<this.numberRepetitions-1;i++){
      this.listaDaMostrare.push('');
    }
    if (animal == "balena") {
      this.showBalena = true;
      this.showTextError = false;
    }

    if (animal == "giaguaro") {
      this.showGiaguaro = true;
      this.showTextError = false;
    }

    if (animal == "iguana") {
      this.showIguana = true;
      this.showTextError = false;
    }

    if (animal == "tigre") {
      this.showTigre = true;
      this.showTextError = false;
    }
    this.numberRepetitions=0;
  }


  cercaTesto(ts: string) {
    this.mostraTesto();

    this.showTigre = false;
    this.showBalena = false;
    this.showGiaguaro = false;
    this.showIguana = false;
    this.showTextError = false;


    if (ts == "tigre") {
      this.showTigre = true;
      this.showBalena = false;
      this.showGiaguaro = false;
      this.showIguana = false;
      this.research = 'tigre';
      this.showTextError = false;
    } else if (ts == "balena") {
      this.showBalena = true;
      this.showTigre = false;
      this.showGiaguaro = false;
      this.showIguana = false;
      this.research = 'balena';
      this.showTextError = false;
    } else if (ts == "giaguaro") {
      this.showGiaguaro = true;
      this.showTigre = false;
      this.showBalena = false;
      this.showIguana = false;
      this.research = 'giaguaro';
      this.showTextError = false;
    } else if (ts == "iguana") {
      this.showIguana = true;
      this.showTigre = false;
      this.showGiaguaro = false;
      this.showBalena = false;
      this.research = 'iguana';
      this.showTextError = false;
    } else {
      this.showTextError = true;
    }
  }

  mostraTesto(){
  if(this.research=="tigre"){
  this.showTextTigre=true;
  } else if (this.research=="giaguaro"){
    this.showTextGiaguaro=true;
  } else if (this.research=="iguana"){
    this.showTextIguana=true;
  } else if (this.research=="balena"){
    this.showTextBalena=true;
  } 
}

inserisciUtente() {
  let utente: any = {
    cognome: this.cognomeUtenteDaInserire,
    eta: this.etaUtenteDaInserire,
    nome: this.nomeUtenteDaInserire
  };
  this.userService.addUtente(utente).subscribe(
    (res)=>{
      
    this.userService.getUtenti().subscribe(
      (response:any) => {
        this.utenti = response;
        console.log(this.utenti[0])
      }
    )
    }
  );
}

eliminaUtente(id: any) {
  this.userService.deleteUtente(id).subscribe(()=>{

    this.userService.getUtenti().subscribe(
      (response:any) => {
        this.utenti = response;
        console.log(this.utenti[0])
      }
    )
  });
}

}
