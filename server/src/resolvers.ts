import type { Resolvers } from './types';

export const resolvers: Resolvers = {
	Query: {
		tracksForHome: (_, __, { dataSources }, info) => {
			return dataSources.trackAPI.getTracks();
		},
	},
	Track: {
		author: ({ authorId }, _, { dataSources }, info) => {
			return dataSources.trackAPI.getAuthor(authorId);
		},
	},
};
