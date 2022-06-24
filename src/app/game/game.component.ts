import { LETTERS_IN_ROWS } from './../../letters_in_rows';
import { VALID_GUESSES } from './../../valid_words';
import { Component, Input, OnInit } from '@angular/core';
import { WORDS } from 'src/words';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  words = WORDS;
  validWords = VALID_GUESSES;
  lettersInRows0 = LETTERS_IN_ROWS[0];
  lettersInRows1 = LETTERS_IN_ROWS[1];
  lettersInRows2 = LETTERS_IN_ROWS[2];

  currentWord: string | undefined;
  guessedWords: string[][] = [[]]
  nextLetterSpace?: number;
  currentLetter?: string;

  constructor() { 
    this.currentWord = this.words[0];
    this.nextLetterSpace = 0;
  }

  ngOnInit(): void {
    
  }

  onLetter(letter: string) {
    console.log(letter);
    // console.log(document.getElementById("1"));
    this.currentLetter = letter;
  }

}
