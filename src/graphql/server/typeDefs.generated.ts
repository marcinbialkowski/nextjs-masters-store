import type { DocumentNode } from 'graphql';
export const typeDefs = {
  kind: 'Document',
  definitions: [
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 12, end: 17 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'category',
            loc: { start: 22, end: 30 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'slug',
                loc: { start: 31, end: 35 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 37, end: 43 },
                  },
                  loc: { start: 37, end: 43 },
                },
                loc: { start: 37, end: 44 },
              },
              directives: [],
              loc: { start: 31, end: 44 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Category',
              loc: { start: 47, end: 55 },
            },
            loc: { start: 47, end: 55 },
          },
          directives: [],
          loc: { start: 22, end: 55 },
        },
      ],
      loc: { start: 0, end: 57 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Category', loc: { start: 64, end: 72 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 77, end: 79 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 81, end: 83 } },
              loc: { start: 81, end: 83 },
            },
            loc: { start: 81, end: 84 },
          },
          directives: [],
          loc: { start: 77, end: 84 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'slug', loc: { start: 87, end: 91 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 93, end: 99 },
              },
              loc: { start: 93, end: 99 },
            },
            loc: { start: 93, end: 100 },
          },
          directives: [],
          loc: { start: 87, end: 100 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 103, end: 107 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 109, end: 115 },
              },
              loc: { start: 109, end: 115 },
            },
            loc: { start: 109, end: 116 },
          },
          directives: [],
          loc: { start: 103, end: 116 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'description',
            loc: { start: 119, end: 130 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 132, end: 138 },
              },
              loc: { start: 132, end: 138 },
            },
            loc: { start: 132, end: 139 },
          },
          directives: [],
          loc: { start: 119, end: 139 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'products',
            loc: { start: 142, end: 150 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
                loc: { start: 151, end: 156 },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                  loc: { start: 158, end: 161 },
                },
                loc: { start: 158, end: 161 },
              },
              directives: [],
              loc: { start: 151, end: 161 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
                loc: { start: 163, end: 167 },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                  loc: { start: 169, end: 172 },
                },
                loc: { start: 169, end: 172 },
              },
              directives: [],
              loc: { start: 163, end: 172 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ProductList',
                loc: { start: 175, end: 186 },
              },
              loc: { start: 175, end: 186 },
            },
            loc: { start: 175, end: 187 },
          },
          directives: [],
          loc: { start: 142, end: 187 },
        },
      ],
      loc: { start: 59, end: 189 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Image', loc: { start: 195, end: 200 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 205, end: 207 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 209, end: 211 },
              },
              loc: { start: 209, end: 211 },
            },
            loc: { start: 209, end: 212 },
          },
          directives: [],
          loc: { start: 205, end: 212 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 215, end: 218 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 220, end: 226 },
              },
              loc: { start: 220, end: 226 },
            },
            loc: { start: 220, end: 227 },
          },
          directives: [],
          loc: { start: 215, end: 227 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'alt', loc: { start: 230, end: 233 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 235, end: 241 },
              },
              loc: { start: 235, end: 241 },
            },
            loc: { start: 235, end: 242 },
          },
          directives: [],
          loc: { start: 230, end: 242 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'width', loc: { start: 245, end: 250 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 252, end: 255 },
              },
              loc: { start: 252, end: 255 },
            },
            loc: { start: 252, end: 256 },
          },
          directives: [],
          loc: { start: 245, end: 256 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'height',
            loc: { start: 259, end: 265 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 267, end: 270 },
              },
              loc: { start: 267, end: 270 },
            },
            loc: { start: 267, end: 271 },
          },
          directives: [],
          loc: { start: 259, end: 271 },
        },
      ],
      loc: { start: 190, end: 273 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'ListMeta', loc: { start: 279, end: 287 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'count', loc: { start: 292, end: 297 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 299, end: 302 },
              },
              loc: { start: 299, end: 302 },
            },
            loc: { start: 299, end: 303 },
          },
          directives: [],
          loc: { start: 292, end: 303 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'total', loc: { start: 306, end: 311 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 313, end: 316 },
              },
              loc: { start: 313, end: 316 },
            },
            loc: { start: 313, end: 317 },
          },
          directives: [],
          loc: { start: 306, end: 317 },
        },
      ],
      loc: { start: 274, end: 319 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 332, end: 337 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'product',
            loc: { start: 342, end: 349 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'slug',
                loc: { start: 350, end: 354 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 356, end: 362 },
                  },
                  loc: { start: 356, end: 362 },
                },
                loc: { start: 356, end: 363 },
              },
              directives: [],
              loc: { start: 350, end: 363 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Product',
              loc: { start: 366, end: 373 },
            },
            loc: { start: 366, end: 373 },
          },
          directives: [],
          loc: { start: 342, end: 373 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'products',
            loc: { start: 376, end: 384 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
                loc: { start: 385, end: 390 },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                  loc: { start: 392, end: 395 },
                },
                loc: { start: 392, end: 395 },
              },
              directives: [],
              loc: { start: 385, end: 395 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
                loc: { start: 397, end: 401 },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                  loc: { start: 403, end: 406 },
                },
                loc: { start: 403, end: 406 },
              },
              directives: [],
              loc: { start: 397, end: 406 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ProductList',
                loc: { start: 409, end: 420 },
              },
              loc: { start: 409, end: 420 },
            },
            loc: { start: 409, end: 421 },
          },
          directives: [],
          loc: { start: 376, end: 421 },
        },
      ],
      loc: { start: 320, end: 423 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Product', loc: { start: 430, end: 437 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 442, end: 444 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 446, end: 448 },
              },
              loc: { start: 446, end: 448 },
            },
            loc: { start: 446, end: 449 },
          },
          directives: [],
          loc: { start: 442, end: 449 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'slug', loc: { start: 452, end: 456 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 458, end: 464 },
              },
              loc: { start: 458, end: 464 },
            },
            loc: { start: 458, end: 465 },
          },
          directives: [],
          loc: { start: 452, end: 465 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 468, end: 472 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 474, end: 480 },
              },
              loc: { start: 474, end: 480 },
            },
            loc: { start: 474, end: 481 },
          },
          directives: [],
          loc: { start: 468, end: 481 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'description',
            loc: { start: 484, end: 495 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 497, end: 503 },
              },
              loc: { start: 497, end: 503 },
            },
            loc: { start: 497, end: 504 },
          },
          directives: [],
          loc: { start: 484, end: 504 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'price', loc: { start: 507, end: 512 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 514, end: 517 },
              },
              loc: { start: 514, end: 517 },
            },
            loc: { start: 514, end: 518 },
          },
          directives: [],
          loc: { start: 507, end: 518 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'images',
            loc: { start: 521, end: 527 },
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
                    loc: { start: 530, end: 535 },
                  },
                  loc: { start: 530, end: 535 },
                },
                loc: { start: 530, end: 536 },
              },
              loc: { start: 529, end: 537 },
            },
            loc: { start: 529, end: 538 },
          },
          directives: [],
          loc: { start: 521, end: 538 },
        },
      ],
      loc: { start: 425, end: 540 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'ProductList',
        loc: { start: 547, end: 558 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'data', loc: { start: 563, end: 567 } },
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
                    loc: { start: 570, end: 577 },
                  },
                  loc: { start: 570, end: 577 },
                },
                loc: { start: 570, end: 578 },
              },
              loc: { start: 569, end: 579 },
            },
            loc: { start: 569, end: 580 },
          },
          directives: [],
          loc: { start: 563, end: 580 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'meta', loc: { start: 583, end: 587 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ListMeta',
                loc: { start: 589, end: 597 },
              },
              loc: { start: 589, end: 597 },
            },
            loc: { start: 589, end: 598 },
          },
          directives: [],
          loc: { start: 583, end: 598 },
        },
      ],
      loc: { start: 542, end: 600 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Query', loc: { start: 606, end: 611 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 601, end: 611 },
    },
  ],
  loc: { start: 0, end: 612 },
} as unknown as DocumentNode;
