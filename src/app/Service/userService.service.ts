import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../Model/user";

@Injectable({providedIn:"root"})
export class UserService {
    baseUrl = 'http://localhost:3000/utenti'    
    constructor(private http: HttpClient){

    }

    getUtenti() {
        return this.http.get<User[]>(this.baseUrl)
    }

    addUtente(utente: User) {
        return this.http.post<any>(this.baseUrl, utente)
    }

    deleteUtente(id: any){
        return this.http.delete<any>(this.baseUrl + '/' + id);
    }

    
}

