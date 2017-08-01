import { Team } from './team';

export class Game {

	public away: Team;
	public home: Team;
		
	constructor (data: any) {
		console.log(data);	
		this.away = new Team('away', data);
		this.home = new Team('home', data);
    }
	
}