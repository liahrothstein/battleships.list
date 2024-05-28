import { createApi } from "@reduxjs/toolkit/query/react";
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { GraphQLClient } from 'graphql-request';

export const client = new GraphQLClient('https://vortex.korabli.su/api/graphql/glossary/');

export const baseApiWithGraphql = createApi({
    baseQuery: graphqlRequestBaseQuery({ client }),
    endpoints: () => ({})
});