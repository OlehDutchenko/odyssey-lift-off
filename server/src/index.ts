import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { Context } from './context';
import { TrackAPI } from './datasources/track-api';
import { resolvers } from './resolvers';
import { typeDefs } from './schema';

async function startApolloServer(): Promise<void> {
	const server = new ApolloServer({
		typeDefs,
		resolvers,
	});

	const { url } = await startStandaloneServer(server, {
		context: async (): Promise<Context> => {
			return Promise.resolve({
				dataSources: {
					trackApi: new TrackAPI(),
				},
			});
		},
	});

	console.log(`
        🚀  Server is running!
        📭  Query at ${url}
	`);
}

startApolloServer();

function createMocks() {
	return {
		Query: () => ({
			tracksForHome: () => [...new Array(6)],
		}),
		Track: () => ({
			title: () => 'Astro Kitty, Space Explorer',
			author: () => {
				return {
					name: 'Grumpy Cat',
					photo: 'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg',
				};
			},
			thumbnail: () =>
				'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
			length: () => 1210,
			modulesCount: () => 6,
		}),
	};
}
