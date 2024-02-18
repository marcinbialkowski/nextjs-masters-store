import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files';

const config = {
  overwrite: true,
  ignoreNoDocuments: true,
  schema: './src/graphql/schema/**/*.graphql',
  documents: 'src/services/**/*.graphql',
  generates: {
    'src/graphql/server/': defineConfig({
      typesPluginsConfig: {
        optionalInfoArgument: true,
      },
      scalarsOverrides: {
        ID: {
          type: 'string',
        },
      },
    }),
    'src/graphql/client/generated/': {
      preset: 'client',
      presetConfig: {
        fragmentMasking: false,
      },
      config: {
        useTypeImports: true,
        enumsAsTypes: true,
        defaultScalarType: 'unknown',
        skipTypename: true,
        documentMode: 'string',
      },
    },
  },
  hooks: {
    afterAllFileWrite: ['pnpm format'],
  },
} satisfies CodegenConfig;

export default config;
