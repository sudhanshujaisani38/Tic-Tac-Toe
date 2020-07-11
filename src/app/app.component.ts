import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'tic-tac-toe';
  winMessage: string = '';
  isCross: boolean = false;
  itemArray: string[] = new Array(9).fill('empty');
  constructor(private toastr: ToastrService) {}

  //resets value for every property
  reloadGame = () => {
    this.winMessage = '';
    this.isCross = false;
    this.itemArray = new Array(9).fill('empty');
  };

  //checks if somebody won
  checkIsWinner = () => {
    //rows
    if (
      this.itemArray[0] != 'empty' &&
      this.itemArray[0] === this.itemArray[1] &&
      this.itemArray[1] === this.itemArray[2]
    ) {
      this.winMessage = this.itemArray[0] + ' won';
    } else if (
      this.itemArray[3] != 'empty' &&
      this.itemArray[3] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[5]
    ) {
      this.winMessage = this.itemArray[3] + ' won';
    } else if (
      this.itemArray[6] != 'empty' &&
      this.itemArray[6] === this.itemArray[7] &&
      this.itemArray[7] === this.itemArray[8]
    ) {
      this.winMessage = this.itemArray[6] + ' won';
    }

    //cols
    else if (
      this.itemArray[0] != 'empty' &&
      this.itemArray[0] === this.itemArray[3] &&
      this.itemArray[3] === this.itemArray[6]
    ) {
      this.winMessage = this.itemArray[0] + ' won';
    } else if (
      this.itemArray[1] != 'empty' &&
      this.itemArray[1] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[7]
    ) {
      this.winMessage = this.itemArray[1] + ' won';
    } else if (
      this.itemArray[2] != 'empty' &&
      this.itemArray[2] === this.itemArray[5] &&
      this.itemArray[5] === this.itemArray[8]
    ) {
      this.winMessage = this.itemArray[2] + ' won';
    }

    //diagonals
    else if (
      this.itemArray[0] != 'empty' &&
      this.itemArray[0] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[8]
    ) {
      this.winMessage = this.itemArray[0] + ' won';
    } else if (
      this.itemArray[2] != 'empty' &&
      this.itemArray[2] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[6]
    ) {
      this.winMessage = this.itemArray[2] + ' won';
    }

    if(this.winMessage){
      this.toastr.success(this.winMessage);
    }
  };

  handleClick = (index: number) => {
    if (this.winMessage) {
      //if someone has already won
      this.toastr.success(this.winMessage);
      return;
    }
    if (this.itemArray[index] === 'empty') {
      this.itemArray[index] = this.isCross ? 'cross' : 'circle';
      this.isCross = !this.isCross;
      this.checkIsWinner();
    } else {
      this.toastr.info('Already filled');
      return;
    }
  };
}
