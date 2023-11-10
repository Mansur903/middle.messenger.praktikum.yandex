import { API } from './Api';

export class ResourcesAPI extends API {
	constructor() {
		super('/resources');
	}

	getAvatar(path:string) {
		return this.http.get(`/${encodeURIComponent(path)}`);
	}
}
