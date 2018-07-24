import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from './../api/insightMi.service';


@Injectable()
export class UserService {

    private URL_WIN_AUTH = '/winAuth/winAuth.aspx';
    private URL_PERMISSIONS = 'api/admin/user/permissions';

    constructor(
        private httpClient: HttpClient,
        private router: Router
    ) { }




    // winAuthUser(): Observable<UserInfo> {
    //     return this.httpClient.get(this.URL_WIN_AUTH)
    //         .map((response: Response) => {
    //             return response.json();
    //         });
    // }

    loadUserPermissions() {
        if (!this.userPermissions) {
            this.httpClient.get(this.URL_PERMISSIONS)
                .subscribe((data) => {
                    if (data) {
                        this.permissionState.setPermissions(data.json());
                    } else {
                        this.permissionState.setPermissions(null);
                    }
                    return true;
                },
                    (error) => {
                        this.router.navigate(['/login'])
                    }
                );
        }
    }

}