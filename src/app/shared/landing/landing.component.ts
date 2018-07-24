import { Subscription } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { UserService } from './../../services/index';

@Component({
	selector: 'landing',
	templateUrl: './landing.component.html',
	styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
	@HostBinding('class.loading') loading = true;

	constructor(
		private router: Router,
		private userService: UserService
	) { }

	ngOnInit() {
		if (!this.userService.getCurrentUser()) {
			this.doWinAuthCheck();
		} else {

			// this.userService.loadUserPermissions();
		}

	}

	doWinAuthCheck() {
		this.userService.winAuthUser()
			.subscribe(data => {
				this.userService.setUserInfo(data);
			},
				(error) => {
					this.router.navigateByUrl('/login');
				});
	}

	// ngOnDestroy() {
	// 	if (this.permissionSubscription) {
	// 		this.permissionSubscription.unsubscribe();
	// 	}
	// }

}
