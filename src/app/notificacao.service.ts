import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {


  constructor(
    private snapBar: MatSnackBar
  ) { }

  notificar(m:string) {
    this.snapBar.open(m,"Ok", {
      duration: 2000,
      verticalPosition: "top",
      horizontalPosition: "center"
    });
  }
}
