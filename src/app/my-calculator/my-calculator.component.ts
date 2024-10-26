import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-calculator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './my-calculator.component.html',
  styleUrls: ['./my-calculator.component.css'],
})
export class MyCalculatorComponent {
  public first: number = 1;
  public second: number = 1;
  public oper: string = '+';
  public operations: string[] = ['+', '-', '/', '*'];

  public result?: number;

  public calc() {
    switch (this.oper) {
      case '+':
        this.result = this.first + this.second;
        break;
      case '-':
        this.result = this.first - this.second;
        break;
      case '*':
        this.result = this.first * this.second;
        break;
      case '/':
        this.result = this.first / this.second;
        break;
      default:
        console.error('Error');
    }
  }
}
