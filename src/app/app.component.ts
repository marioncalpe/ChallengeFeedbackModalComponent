import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms'; // Si vous utilisez ngModel

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'ChallengeFeedbackModalComponent';
  //-------------------------------//
  // function open and close popup //
  //-------------------------------//
  openbydocuement() {
    const modal = document.getElementById('pop-up');
    if (modal != null) {
      modal.style.display = 'block';
      const button = document.getElementById('button');
      if (button != null) {
        button.style.display = 'none';
      }
    }
  }
  closebydocuement() {
    const modal = document.getElementById('pop-up');
    if (modal != null) {
      modal.style.display = 'none';
      const button = document.getElementById('button');
      if (button != null) {
        button.style.display = 'block';
      }
    }
  }
  //-----------------------//
  // function save ratings //
  //-----------------------//

  ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  selectedRating: number | undefined = undefined;

  selectRating(ranting: number) {
    this.selectedRating = ranting;
  }

  onSubmit() {
    if (this.selectedRating !== undefined) {   
      this.saveRating(this.selectedRating);
      
    }
  }

  saveRating(rating: number) {
    this.closebydocuement();
    console.log('Rating saved:', rating);
    if(this.selectedRating === 1){
      const modal = document.getElementById('1');
      if (modal != null) {
        modal.style.display = 'block';
      }
    }else if(this.selectedRating === 2){
      const modal = document.getElementById('2');
      if (modal != null) {
        modal.style.display = 'block';
      }
    }else if(this.selectedRating === 3){
      const modal = document.getElementById('3');
      if (modal != null) {
        modal.style.display = 'block';
      }
    }else if(this.selectedRating === 4){
      const modal = document.getElementById('4');
      if (modal != null) {
        modal.style.display = 'block';
      }
    }else if(this.selectedRating === 5){
      const modal = document.getElementById('5');
      if (modal != null) {
        modal.style.display = 'block';
      }
    }else if(this.selectedRating === 6){
      const modal = document.getElementById('6');
      if (modal != null) {
        modal.style.display = 'block';
      }
    }else if(this.selectedRating === 7){
      const modal = document.getElementById('7');
      if (modal != null) {
        modal.style.display = 'block';
      }
    }else if(this.selectedRating === 8){
      const modal = document.getElementById('8');
      if (modal != null) {
        modal.style.display = 'block';
      }
    }else if(this.selectedRating === 9){
      const modal = document.getElementById('9');
      if (modal != null) {
        modal.style.display = 'block';
      }
    }else{
      const modal = document.getElementById('10');
      if (modal != null) {
        modal.style.display = 'block';
      }
    }
  }

}
