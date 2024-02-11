import React from 'react';
import { gql } from '../__generated__';
import { useQuery } from '@apollo/client';
import { Layout, QueryResult } from '../components';
import { useParams } from 'react-router-dom';
import TrackDetail from '../components/track-detail';

const GET_TRACK = gql(`query GetTrack($trackId: ID!) {
  track(id: $trackId) {
    id
    title
    author {
      id
      name
      photo
    }
    thumbnail
    length
    modulesCount
    numberOfViews
    modules {
      id
      title
      length
    }
    description
  }
}`);

const Track: React.FC = () => {
	const { trackId = '' } = useParams();
	const { loading, error, data } = useQuery(GET_TRACK, {
		variables: {
			trackId,
		},
	});

	return (
		<Layout>
			<QueryResult loading={loading} data={data} error={error}>
				<TrackDetail track={data?.track} />
			</QueryResult>
		</Layout>
	);
};

export default Track;
