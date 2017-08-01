import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Game } from './game';
import { MLBGamesHttpService } from './mlbgames.http.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [MLBGamesHttpService]
})

export class AppComponent {
	
	title = 'Today';
	
  	errorMessage: string;
  	selectedGame;
  	games: Game[] = [];  	
		
	constructor(private gamesService: MLBGamesHttpService) { }
	
	getGames(): void {
		this.gamesService.getGames()
			.subscribe(
				data => {
					this.onComplete(data);	
				},
				//games => this.games = games,
				error => this.errorMessage = <any>error
			);
	}
	
	ngOnInit(): void {
		this.getGames();
	}
	
  	onSelect(game:Game): void {
		this.selectedGame = game;
		console.log(game);
	}
	
	onComplete(data:any): void {
		let game: Game;
		for (var i = 0; i < data.length; i++) {
			game = new Game(data[i]);
			this.games.push(game);
		}
	}
}