import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: './src/shared/graphql/schema.graphql',
    documents: './src/shared/graphql/document.graphql',
    generates: {
        './src/app/services/generated.ts': {
            plugins: [
                'typescript',
                'typescript-resolvers',
                {
                    'typescript-rtk-query': {
                        importBaseApiFrom: '../api/baseApi.ts',
                        importBaseApiAlternateName: 'baseApiWithGraphql',
                        exportHooks: true
                    }
                }
            ]
        }
    }
};

export default config