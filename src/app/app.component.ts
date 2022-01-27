import { Component, OnInit, setTestabilityGetter } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit{
  
  chooseBalls=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  selectedNumbersArr=[0, 0, 0, 0, 0 , 0 ,0, 0];
  selectedNumber = 0;
  myBet=0; 
  random=0;
  buttonDisabled:any=true; 
  account=500;
  message="";
  messageClass="message hidden"

  ngOnInit(): void {

  }

  randomNumber() {
    this.random =  Math.floor(Math.random() * 10) + 1; 
    const win = this.random === this.selectedNumber;
    this.account=win ? this.account +this.myBet*1.5 : this.account - this.myBet; 
    this.showMessage(win ? "Congratulations you won!" : "Sorry, try again!")
    this.selectedNumber=0; 
  }  

  selectNumber(userChoiseNumber:number) { 
  if (!this.selectedNumber) {
    this.selectedNumber = userChoiseNumber;
    this.selectedNumbersArr[this.selectedNumbersArr.indexOf(0)] = userChoiseNumber; 
  } 
}

  clearSelection() {
  this.selectedNumber = 0; 
  this.selectedNumbersArr[this.selectedNumbersArr.indexOf(0)-1]=0;
}
 
   getRandomColor=() => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

setBet(event: any){
  if (event.target.value*1 < 5 ) {
    this.showMessage ("Minimum bet is 5 €");
  } else {
    this.buttonDisabled=null;
    this.myBet=event.target.value*1;
  }
}

showMessage(msg:string) {
  this.message=msg;
  this.messageClass="message";
  setTimeout(()=> {
  this.messageClass="message hidden"
  }, 2000 )
}
}



