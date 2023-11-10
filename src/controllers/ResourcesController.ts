import { ResourcesAPI } from '../api/ResourcesApi';

class ResourcesController {
	private resourcesApi = new ResourcesAPI();

	async getAvatar(path: string) {
		let avatar;
		try {
			avatar = await this.resourcesApi.getAvatar(path);
		} catch (error) {
			console.log(error);
		}
		return avatar;
	}
}

export default new ResourcesController();
