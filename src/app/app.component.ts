import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pmd-devops';
  constructor(private readonly http: HttpClient){}

  cGetProducts() {
    const pruduct= {
      pName: 'hetic name',
      pType: 'cars',
    }
    this.http.post('http://localhost:3000/products',pruduct).subscribe(
      (data) => {
        console.log('In http')
        console.log(data)
      })
      console.log('After http')
  }

  cGetClient() {
    const client= {
      cLastName: 'last name',
      cFirstName: 'first name',
    }
    this.http.post('http://localhost:3000/client',client).subscribe(
      (data) => {
        console.log('In http')
        console.log(data)
      })
      console.log('After http')
  }
}
