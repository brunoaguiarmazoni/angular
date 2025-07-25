import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-botao-carregar-mais',
  imports: [CommonModule, RouterModule, CommonModule, FormsModule],
  templateUrl: './botao-carregar-mais.html',
  styleUrl: './botao-carregar-mais.css'
})
export class BotaoCarregarMais {

  @Input() haMaisPensamentos: boolean = false;



}
