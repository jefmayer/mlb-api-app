import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Game } from './game';

@Injectable()
export class MLBGamesHttpService {
	
	// Map visualizer
	// https://developers.google.com/maps/documentation/javascript/earthquakes
	
	private url = 'http://mlb.mlb.com/gdcross/components/game/mlb/year_2017/month_05/day_17/master_scoreboard.json';
	
	constructor (private http: Http) {}
	
	getGames(): Observable<Game[]> {
		return this.http.get(this.url)
			.map(this.extractData)
			.catch(this.handleError);
	}
	
	private extractData(res: Response) {
		let body = res.json();
		return body.data.games.game || { };
	}
	
	private handleError (error: Response | any) {
		// In a real world app, you might use a remote logging infrastructure
		let errMsg: string;
		if (error instanceof Response) {
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}
		console.error(errMsg);
		return Observable.throw(errMsg);
	}
}
