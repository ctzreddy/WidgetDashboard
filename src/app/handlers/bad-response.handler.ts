import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { ExceptionHandler } from './exception.handler';

@Injectable()
export class BadResponseHandler {

	public static STATUS_UNAUTHORISED = 401;
	public static STATUS_SESSION_EXPIRED = 403;
	public static STATUS_INSUFFICIENT_PERMISSIONS = 405;
	private sessionExpired = new Subject<boolean>();

	constructor(private exceptionHandler: ExceptionHandler, private router: Router) { }

	public get onSessionExpired(): Observable<boolean> {
		return this.sessionExpired.asObservable();
	}

	/**
	 * Handles bad HTTP response, based on response status
	 */
	public handleBadResponse(response: Response): Observable<Response> {

		switch (response.status) {
			case BadResponseHandler.STATUS_SESSION_EXPIRED,
				BadResponseHandler.STATUS_INSUFFICIENT_PERMISSIONS,
				BadResponseHandler.STATUS_UNAUTHORISED:
				// this.sessionExpired.next(true);
				window.localStorage.setItem('imitkn', null);
				this.router.navigateByUrl('/login');

				break;
		}

		return this.exceptionHandler.handleException(response);
	}
}
