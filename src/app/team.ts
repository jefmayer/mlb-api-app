export class Team {
	
	public role: string;
	public name: string;
	public id: string;
	public svg: string;
		
	constructor (role: string, data: any) {
		
		this.role = role;
		
		var city = data[this.role + '_team_city'];
		// Address inconsistencies w/ city name
		if (city.toLowerCase().indexOf('ny ') !== -1) {
			city = 'New York';
		}
		if (city.toLowerCase().indexOf('chi ') !== -1) {
			city = 'Chicago';
		}
		if (city.toLowerCase().indexOf('la ') !== -1) {
			city = 'Los Angeles';
		}
		
		city = city.replace(/\.|\-/g, '');
		
		this.name = city.replace(' ', '') + '' + data[this.role + '_team_name'].replace(/\s|-/g, '');
		this.id = data[this.role + '_team_id'];
		this.svg = '#team-cap-on-light-' + this.id;
    }
	
}