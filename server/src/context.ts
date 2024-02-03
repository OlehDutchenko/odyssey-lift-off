import type { TrackAPI } from './datasources/track-api';

export interface Context {
	dataSources: {
		trackApi: TrackAPI;
	};
}
