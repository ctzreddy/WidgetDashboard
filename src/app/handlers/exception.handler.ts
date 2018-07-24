import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ExceptionHandler {

	constructor() { }

	public handleException(error: any): Observable<any> {
		let emsg: string;

		switch (typeof error) {
			case 'string':
				emsg = error;
				break;

			case 'object':
				if (error instanceof Response) {
					emsg = this.handleHTTPReponseType(error);
				} else {
					const obj = <Object>error;
					emsg = obj.toString();
				}
				break;
		}

		// In case we can't determine any error information
		if (!emsg) {
			emsg = 'Unknown error';
		}

		console.error(`Caught: ${emsg}`);
		// const alert: IAlert = new IAlert('error', emsg);
		// this.alertService.setAlertState(alert);
		return Observable.throw(error);
	}

	private handleHTTPReponseType(error: Response): string {
		const ERROR_MESSAGE_PROPERTIES: string[] = ['error', 'message'];
		let emsg: string = null;

		try {
			const errObject: any = error.json();
			// Look for known properties containing error information
			ERROR_MESSAGE_PROPERTIES.some(property => {
				if (errObject.hasOwnProperty(property)) {
					// Set emsg to value of first property found on object
					emsg = <string>errObject[property];
					return true;
				}
				return false;
			});
		} catch (e) { }

		// If we haven't managed to find error information, convert the response to a string
		if (!emsg) {
			emsg = error.toString();
		}

		return emsg;
	}
}
