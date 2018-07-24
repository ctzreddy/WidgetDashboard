import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Response } from '@angular/http';
import { HttpClient } from './httpclient.service';

import { UserInfo } from './../entities/interfaces/user';


@Injectable()
export class UserService {

    private URL_WIN_AUTH = '/winAuth/winAuth.aspx';
    private URL_PERMISSIONS = 'api/admin/user/permissions';

    private userInfo: UserInfo;
    private isAuthenticated = false;

    constructor(
        private httpClient: HttpClient,
        private router: Router
    ) { }

    setUserInfo(userInfo: UserInfo): void {
        this.isAuthenticated = true;
        this.userInfo = userInfo;

        window.localStorage.setItem('imiusr', JSON.stringify(this.userInfo));
        window.localStorage.setItem('imitkn', this.userInfo.loginToken.token);

        // once current user is set load permissions
        // setTimeout(() => this.loadUserPermissions(), 1000);
    }

    getCurrentUser(): UserInfo {
        if (this.isAuthenticated) {
            return this.userInfo;
        } else {
            const imiusr = JSON.parse(window.localStorage.getItem('imiusr'));
            return imiusr;
        }
    }

    winAuthUser(): Observable<UserInfo> {
        return this.httpClient.get(this.URL_WIN_AUTH)
            .map((response: Response) => {
                return response.json();
            });
    }

}
