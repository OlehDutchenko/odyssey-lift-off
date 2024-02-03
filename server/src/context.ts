import type { TrackAPI } from './datasources/track-api';

export interface DataSourceContext {
	dataSources: {
		trackAPI: TrackAPI;
	};
}
