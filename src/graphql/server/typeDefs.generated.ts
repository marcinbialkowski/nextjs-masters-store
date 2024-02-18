import type { DocumentNode } from 'graphql';
export const typeDefs = {
  kind: 'Document',
  definitions: [
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Image', loc: { start: 5, end: 10 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 15, end: 17 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 19, end: 21 } },
              loc: { start: 19, end: 21 },
            },
            loc: { start: 19, end: 22 },
          },
          directives: [],
          loc: { start: 15, end: 22 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 25, end: 28 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 30, end: 36 },
              },
              loc: { start: 30, end: 36 },
            },
            loc: { start: 30, end: 37 },
          },
          directives: [],
          loc: { start: 25, end: 37 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'alt', loc: { start: 40, end: 43 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 45, end: 51 },
              },
              loc: { start: 45, end: 51 },
            },
            loc: { start: 45, end: 52 },
          },
          directives: [],
          loc: { start: 40, end: 52 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'width', loc: { start: 55, end: 60 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Int', loc: { start: 62, end: 65 } },
              loc: { start: 62, end: 65 },
            },
            loc: { start: 62, end: 66 },
          },
          directives: [],
          loc: { start: 55, end: 66 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'height', loc: { start: 69, end: 75 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Int', loc: { start: 77, end: 80 } },
              loc: { start: 77, end: 80 },
            },
            loc: { start: 77, end: 81 },
          },
          directives: [],
          loc: { start: 69, end: 81 },
        },
      ],
      loc: { start: 0, end: 83 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'ListMeta', loc: { start: 89, end: 97 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'count', loc: { start: 102, end: 107 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 109, end: 112 },
              },
              loc: { start: 109, end: 112 },
            },
            loc: { start: 109, end: 113 },
          },
          directives: [],
          loc: { start: 102, end: 113 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'total', loc: { start: 116, end: 121 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 123, end: 126 },
              },
              loc: { start: 123, end: 126 },
            },
            loc: { start: 123, end: 127 },
          },
          directives: [],
          loc: { start: 116, end: 127 },
        },
      ],
      loc: { start: 84, end: 129 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 142, end: 147 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'product',
            loc: { start: 152, end: 159 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'slug',
                loc: { start: 160, end: 164 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 166, end: 172 },
                  },
                  loc: { start: 166, end: 172 },
                },
                loc: { start: 166, end: 173 },
              },
              directives: [],
              loc: { start: 160, end: 173 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Product',
              loc: { start: 176, end: 183 },
            },
            loc: { start: 176, end: 183 },
          },
          directives: [],
          loc: { start: 152, end: 183 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'products',
            loc: { start: 186, end: 194 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
                loc: { start: 195, end: 200 },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                  loc: { start: 202, end: 205 },
                },
                loc: { start: 202, end: 205 },
              },
              directives: [],
              loc: { start: 195, end: 205 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
                loc: { start: 207, end: 211 },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                  loc: { start: 213, end: 216 },
                },
                loc: { start: 213, end: 216 },
              },
              directives: [],
              loc: { start: 207, end: 216 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ProductList',
                loc: { start: 219, end: 230 },
              },
              loc: { start: 219, end: 230 },
            },
            loc: { start: 219, end: 231 },
          },
          directives: [],
          loc: { start: 186, end: 231 },
        },
      ],
      loc: { start: 130, end: 233 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Product', loc: { start: 240, end: 247 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 252, end: 254 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 256, end: 258 },
              },
              loc: { start: 256, end: 258 },
            },
            loc: { start: 256, end: 259 },
          },
          directives: [],
          loc: { start: 252, end: 259 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 262, end: 266 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 268, end: 274 },
              },
              loc: { start: 268, end: 274 },
            },
            loc: { start: 268, end: 275 },
          },
          directives: [],
          loc: { start: 262, end: 275 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'slug', loc: { start: 278, end: 282 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 284, end: 290 },
              },
              loc: { start: 284, end: 290 },
            },
            loc: { start: 284, end: 291 },
          },
          directives: [],
          loc: { start: 278, end: 291 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'description',
            loc: { start: 294, end: 305 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 307, end: 313 },
              },
              loc: { start: 307, end: 313 },
            },
            loc: { start: 307, end: 314 },
          },
          directives: [],
          loc: { start: 294, end: 314 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'price', loc: { start: 317, end: 322 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 324, end: 327 },
              },
              loc: { start: 324, end: 327 },
            },
            loc: { start: 324, end: 328 },
          },
          directives: [],
          loc: { start: 317, end: 328 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'images',
            loc: { start: 331, end: 337 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Image',
                    loc: { start: 340, end: 345 },
                  },
                  loc: { start: 340, end: 345 },
                },
                loc: { start: 340, end: 346 },
              },
              loc: { start: 339, end: 347 },
            },
            loc: { start: 339, end: 348 },
          },
          directives: [],
          loc: { start: 331, end: 348 },
        },
      ],
      loc: { start: 235, end: 350 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'ProductList',
        loc: { start: 357, end: 368 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'data', loc: { start: 373, end: 377 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Product',
                    loc: { start: 380, end: 387 },
                  },
                  loc: { start: 380, end: 387 },
                },
                loc: { start: 380, end: 388 },
              },
              loc: { start: 379, end: 389 },
            },
            loc: { start: 379, end: 390 },
          },
          directives: [],
          loc: { start: 373, end: 390 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'meta', loc: { start: 393, end: 397 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ListMeta',
                loc: { start: 399, end: 407 },
              },
              loc: { start: 399, end: 407 },
            },
            loc: { start: 399, end: 408 },
          },
          directives: [],
          loc: { start: 393, end: 408 },
        },
      ],
      loc: { start: 352, end: 410 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Query', loc: { start: 416, end: 421 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 411, end: 421 },
    },
  ],
  loc: { start: 0, end: 422 },
} as unknown as DocumentNode;
