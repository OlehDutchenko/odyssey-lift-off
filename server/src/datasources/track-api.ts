import { RESTDataSource } from '@apollo/datasource-rest';

export class TrackAPI extends RESTDataSource {
	baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';

	getTracks(): Promise<TrackApiSourceTrack[]> {
		return this.get('tracks');
	}

	getAuthor(authorId: string): Promise<TrackApiSourceAuthor> {
		return this.get(`author/${authorId}`);
	}
}

export interface TrackApiSourceTrack {
	authorId: string;
}

export interface TrackApiSourceAuthor {}
