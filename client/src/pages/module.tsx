import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import { gql } from '../__generated__';
import { Layout, QueryResult } from '../components';
import ModuleDetail from '../components/module-detail';

const GET_MODULE = gql(`query GetModule($moduleId: ID!, $trackId: ID!) {
  module(id: $moduleId) {
    id
    title
    content
    videoUrl
  }
  track(id: $trackId) {
    id
    title
    modulesCount
    modules {
      id
      title
      length
    }
  }
}`);

const Module: React.FC = () => {
	const { trackId = '', moduleId = '' } = useParams();
	const { loading, error, data } = useQuery(GET_MODULE, {
		variables: {
			trackId,
			moduleId,
		},
	});

	return (
		<Layout fullWidth={true}>
			<QueryResult loading={loading} data={data} error={error}>
				<ModuleDetail track={data?.track} module={data?.module} />
			</QueryResult>
		</Layout>
	);
};

export default Module;
