export interface MenuItem {
	faIcon: string;
	image: string;
}

export interface Report {
	moduleId: number;
	reportId: number;
	reportName: string;
	shortDesc: string;
	description: string;
	api: string;
	menuItem: MenuItem;
	helpDocUri: string;
}

export interface Permissions {
	moduleId: number;
	moduleName: string;
	shortDesc: string;
	description: string;
	menuItem: MenuItem;
	api: string;
	reportPermissions: Report[];
	helpDocUri: string;
}