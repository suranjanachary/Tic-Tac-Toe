import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common'; // ✅ Import directives


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  imports: [NgIf, NgFor],
  standalone: true,
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  board: (string | null)[] = [];
  currentPlayer = 'X';
  winner: string | null = null;

  ngOnInit() {
    this.resetGame();
  }

  makeMove(index: number) {
    if (!this.board[index] && !this.winner) {
      this.board[index] = this.currentPlayer;
      if (this.checkWinner()) {
        this.winner = this.currentPlayer;
      } else {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }

  checkWinner(): boolean {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
      [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    return winPatterns.some(([a, b, c]) =>
      this.board[a] &&
      this.board[a] === this.board[b] &&
      this.board[a] === this.board[c]
    );
  }

  resetGame() {
    this.board = Array(9).fill(null);
    this.currentPlayer = 'X';
    this.winner = null;
  }
}
