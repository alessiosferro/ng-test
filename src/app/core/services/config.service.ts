import {Injectable} from "@angular/core";
import {Navbar} from "@app/core/const/navbar";

@Injectable({
	providedIn: 'root'
})
export class ConfigService {
	private _navList = [
		{
			href: '#',
			title: Navbar.Dashboard
		},
		{
			href: '#',
			title: Navbar.Projects
		}
	];

	get navList() {
		return this._navList;
	}
}
