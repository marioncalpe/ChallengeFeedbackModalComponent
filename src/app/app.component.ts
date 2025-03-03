import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'ChallengeFeedbackModalComponent';
  
  openbydocuement(){
    const modal = document.getElementById('pop-up');
    if(modal != null){
      modal.style.display = 'block';
    }
  }
  closebydocuement(){
    const modal = document.getElementById('pop-up');
    if(modal != null){
      modal.style.display = 'none';
    }
  }
}
