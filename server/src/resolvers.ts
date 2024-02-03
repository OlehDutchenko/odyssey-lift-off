import type { GraphQLFieldResolver } from 'graphql/type';
import type { Context } from './context';
import type { TrackApiSourceTrack } from './datasources/track-api';

type Resolver<Source = any> = GraphQLFieldResolver<Source, Context>;

export const resolvers: {
	Query: {
		tracksForHome: Resolver;
	};
	Track: {
		author: Resolver<TrackApiSourceTrack>;
	};
} = {
	Query: {
		tracksForHome: (_, __, { dataSources }, info) => {
			return dataSources.trackApi.getTracks();
		},
	},
	Track: {
		author: ({ authorId }, _, { dataSources }, info) => {
			return dataSources.trackApi.getAuthor(authorId);
		},
	},
};
