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
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 202, end: 207 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'collection',
            loc: { start: 212, end: 222 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'slug',
                loc: { start: 223, end: 227 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 229, end: 235 },
                  },
                  loc: { start: 229, end: 235 },
                },
                loc: { start: 229, end: 236 },
              },
              directives: [],
              loc: { start: 223, end: 236 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Collection',
              loc: { start: 239, end: 249 },
            },
            loc: { start: 239, end: 249 },
          },
          directives: [],
          loc: { start: 212, end: 249 },
        },
      ],
      loc: { start: 190, end: 251 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Collection',
        loc: { start: 258, end: 268 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 273, end: 275 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 277, end: 279 },
              },
              loc: { start: 277, end: 279 },
            },
            loc: { start: 277, end: 280 },
          },
          directives: [],
          loc: { start: 273, end: 280 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'slug', loc: { start: 283, end: 287 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 289, end: 295 },
              },
              loc: { start: 289, end: 295 },
            },
            loc: { start: 289, end: 296 },
          },
          directives: [],
          loc: { start: 283, end: 296 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 299, end: 303 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 305, end: 311 },
              },
              loc: { start: 305, end: 311 },
            },
            loc: { start: 305, end: 312 },
          },
          directives: [],
          loc: { start: 299, end: 312 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'description',
            loc: { start: 315, end: 326 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 328, end: 334 },
              },
              loc: { start: 328, end: 334 },
            },
            loc: { start: 328, end: 335 },
          },
          directives: [],
          loc: { start: 315, end: 335 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'products',
            loc: { start: 338, end: 346 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
                loc: { start: 347, end: 352 },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                  loc: { start: 354, end: 357 },
                },
                loc: { start: 354, end: 357 },
              },
              directives: [],
              loc: { start: 347, end: 357 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
                loc: { start: 359, end: 363 },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                  loc: { start: 365, end: 368 },
                },
                loc: { start: 365, end: 368 },
              },
              directives: [],
              loc: { start: 359, end: 368 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ProductList',
                loc: { start: 371, end: 382 },
              },
              loc: { start: 371, end: 382 },
            },
            loc: { start: 371, end: 383 },
          },
          directives: [],
          loc: { start: 338, end: 383 },
        },
      ],
      loc: { start: 253, end: 385 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Image', loc: { start: 391, end: 396 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 401, end: 403 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 405, end: 407 },
              },
              loc: { start: 405, end: 407 },
            },
            loc: { start: 405, end: 408 },
          },
          directives: [],
          loc: { start: 401, end: 408 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 411, end: 414 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 416, end: 422 },
              },
              loc: { start: 416, end: 422 },
            },
            loc: { start: 416, end: 423 },
          },
          directives: [],
          loc: { start: 411, end: 423 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'alt', loc: { start: 426, end: 429 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 431, end: 437 },
              },
              loc: { start: 431, end: 437 },
            },
            loc: { start: 431, end: 438 },
          },
          directives: [],
          loc: { start: 426, end: 438 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'width', loc: { start: 441, end: 446 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 448, end: 451 },
              },
              loc: { start: 448, end: 451 },
            },
            loc: { start: 448, end: 452 },
          },
          directives: [],
          loc: { start: 441, end: 452 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'height',
            loc: { start: 455, end: 461 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 463, end: 466 },
              },
              loc: { start: 463, end: 466 },
            },
            loc: { start: 463, end: 467 },
          },
          directives: [],
          loc: { start: 455, end: 467 },
        },
      ],
      loc: { start: 386, end: 469 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'ListMeta', loc: { start: 475, end: 483 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'count', loc: { start: 488, end: 493 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 495, end: 498 },
              },
              loc: { start: 495, end: 498 },
            },
            loc: { start: 495, end: 499 },
          },
          directives: [],
          loc: { start: 488, end: 499 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'total', loc: { start: 502, end: 507 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 509, end: 512 },
              },
              loc: { start: 509, end: 512 },
            },
            loc: { start: 509, end: 513 },
          },
          directives: [],
          loc: { start: 502, end: 513 },
        },
      ],
      loc: { start: 470, end: 515 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 528, end: 533 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'product',
            loc: { start: 538, end: 545 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'slug',
                loc: { start: 546, end: 550 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 552, end: 558 },
                  },
                  loc: { start: 552, end: 558 },
                },
                loc: { start: 552, end: 559 },
              },
              directives: [],
              loc: { start: 546, end: 559 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Product',
              loc: { start: 562, end: 569 },
            },
            loc: { start: 562, end: 569 },
          },
          directives: [],
          loc: { start: 538, end: 569 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'products',
            loc: { start: 572, end: 580 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
                loc: { start: 581, end: 586 },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                  loc: { start: 588, end: 591 },
                },
                loc: { start: 588, end: 591 },
              },
              directives: [],
              loc: { start: 581, end: 591 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
                loc: { start: 593, end: 597 },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                  loc: { start: 599, end: 602 },
                },
                loc: { start: 599, end: 602 },
              },
              directives: [],
              loc: { start: 593, end: 602 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'search',
                loc: { start: 604, end: 610 },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                  loc: { start: 612, end: 618 },
                },
                loc: { start: 612, end: 618 },
              },
              directives: [],
              loc: { start: 604, end: 618 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ProductList',
                loc: { start: 621, end: 632 },
              },
              loc: { start: 621, end: 632 },
            },
            loc: { start: 621, end: 633 },
          },
          directives: [],
          loc: { start: 572, end: 633 },
        },
      ],
      loc: { start: 516, end: 635 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Product', loc: { start: 642, end: 649 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 654, end: 656 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 658, end: 660 },
              },
              loc: { start: 658, end: 660 },
            },
            loc: { start: 658, end: 661 },
          },
          directives: [],
          loc: { start: 654, end: 661 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'slug', loc: { start: 664, end: 668 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 670, end: 676 },
              },
              loc: { start: 670, end: 676 },
            },
            loc: { start: 670, end: 677 },
          },
          directives: [],
          loc: { start: 664, end: 677 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 680, end: 684 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 686, end: 692 },
              },
              loc: { start: 686, end: 692 },
            },
            loc: { start: 686, end: 693 },
          },
          directives: [],
          loc: { start: 680, end: 693 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'description',
            loc: { start: 696, end: 707 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 709, end: 715 },
              },
              loc: { start: 709, end: 715 },
            },
            loc: { start: 709, end: 716 },
          },
          directives: [],
          loc: { start: 696, end: 716 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'price', loc: { start: 719, end: 724 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 726, end: 729 },
              },
              loc: { start: 726, end: 729 },
            },
            loc: { start: 726, end: 730 },
          },
          directives: [],
          loc: { start: 719, end: 730 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'images',
            loc: { start: 733, end: 739 },
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
                    loc: { start: 742, end: 747 },
                  },
                  loc: { start: 742, end: 747 },
                },
                loc: { start: 742, end: 748 },
              },
              loc: { start: 741, end: 749 },
            },
            loc: { start: 741, end: 750 },
          },
          directives: [],
          loc: { start: 733, end: 750 },
        },
      ],
      loc: { start: 637, end: 752 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'ProductList',
        loc: { start: 759, end: 770 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'data', loc: { start: 775, end: 779 } },
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
                    loc: { start: 782, end: 789 },
                  },
                  loc: { start: 782, end: 789 },
                },
                loc: { start: 782, end: 790 },
              },
              loc: { start: 781, end: 791 },
            },
            loc: { start: 781, end: 792 },
          },
          directives: [],
          loc: { start: 775, end: 792 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'meta', loc: { start: 795, end: 799 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ListMeta',
                loc: { start: 801, end: 809 },
              },
              loc: { start: 801, end: 809 },
            },
            loc: { start: 801, end: 810 },
          },
          directives: [],
          loc: { start: 795, end: 810 },
        },
      ],
      loc: { start: 754, end: 812 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Query', loc: { start: 818, end: 823 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 813, end: 823 },
    },
  ],
  loc: { start: 0, end: 824 },
} as unknown as DocumentNode;
